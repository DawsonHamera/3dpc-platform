import { BadRequestException } from '@nestjs/common';
import {
  ProductsService,
  validateSectionOrderInvariants,
} from './products.service';

type MockTx = {
  section: {
    findMany: jest.Mock;
    update: jest.Mock;
  };
};

function createServiceWithMockTransaction() {
  const tx: MockTx = {
    section: {
      findMany: jest.fn(),
      update: jest.fn(),
    },
  };

  const prisma = {
    $transaction: jest.fn(async (callback: (transaction: MockTx) => unknown) =>
      callback(tx),
    ),
  };

  const service = new ProductsService(prisma as never);

  return { service, prisma, tx };
}

describe('validateSectionOrderInvariants', () => {
  it('accepts contiguous 0-based displayOrder values with unique ids', () => {
    expect(() =>
      validateSectionOrderInvariants([
        { id: 10, displayOrder: 0 },
        { id: 20, displayOrder: 1 },
        { id: 30, displayOrder: 2 },
      ]),
    ).not.toThrow();
  });

  it('rejects duplicate section ids', () => {
    expect(() =>
      validateSectionOrderInvariants([
        { id: 10, displayOrder: 0 },
        { id: 10, displayOrder: 1 },
      ]),
    ).toThrow(BadRequestException);

    expect(() =>
      validateSectionOrderInvariants([
        { id: 10, displayOrder: 0 },
        { id: 10, displayOrder: 1 },
      ]),
    ).toThrow('Duplicate section ids are not allowed: 10');
  });

  it('rejects duplicate displayOrder values', () => {
    expect(() =>
      validateSectionOrderInvariants([
        { id: 10, displayOrder: 0 },
        { id: 20, displayOrder: 0 },
      ]),
    ).toThrow(BadRequestException);

    expect(() =>
      validateSectionOrderInvariants([
        { id: 10, displayOrder: 0 },
        { id: 20, displayOrder: 0 },
      ]),
    ).toThrow('Duplicate displayOrder values are not allowed: 0');
  });

  it('rejects non-contiguous displayOrder values', () => {
    expect(() =>
      validateSectionOrderInvariants([
        { id: 10, displayOrder: 0 },
        { id: 20, displayOrder: 2 },
      ]),
    ).toThrow(BadRequestException);

    expect(() =>
      validateSectionOrderInvariants([
        { id: 10, displayOrder: 0 },
        { id: 20, displayOrder: 2 },
      ]),
    ).toThrow(
      'displayOrder values must be a contiguous 0-based sequence from 0 to 1',
    );
  });
});

describe('ProductsService.reorderSections', () => {
  it('persists full-domain reorder and returns deterministic ordered sections', async () => {
    const { service, tx } = createServiceWithMockTransaction();

    tx.section.findMany
      .mockResolvedValueOnce([{ id: 11 }, { id: 22 }, { id: 33 }])
      .mockResolvedValueOnce([
        { id: 33, display_order: 0, type: 'filament' },
        { id: 11, display_order: 1, type: 'filament' },
        { id: 22, display_order: 2, type: 'filament' },
      ]);
    tx.section.update.mockImplementation(
      async ({
        where,
        data,
      }: {
        where: { id: number };
        data: { display_order: number };
      }) => ({
        id: where.id,
        display_order: data.display_order,
      }),
    );

    const result = await service.reorderSections({
      type: 'filament',
      sections: [
        { id: 33, displayOrder: 0 },
        { id: 11, displayOrder: 1 },
        { id: 22, displayOrder: 2 },
      ],
    });

    expect(tx.section.findMany).toHaveBeenNthCalledWith(1, {
      where: { type: 'filament' },
      select: { id: true },
    });
    expect(tx.section.update).toHaveBeenCalledTimes(3);
    expect(tx.section.findMany).toHaveBeenNthCalledWith(2, {
      where: { type: 'filament' },
      orderBy: [{ display_order: 'asc' }, { id: 'asc' }],
    });
    expect(result).toEqual([
      { id: 33, display_order: 0, type: 'filament' },
      { id: 11, display_order: 1, type: 'filament' },
      { id: 22, display_order: 2, type: 'filament' },
    ]);
  });

  it('rejects partial payloads that do not include all ids in the reorder domain', async () => {
    const { service, tx } = createServiceWithMockTransaction();

    tx.section.findMany.mockResolvedValueOnce([
      { id: 11 },
      { id: 22 },
      { id: 33 },
    ]);

    await expect(
      service.reorderSections({
        type: 'filament',
        sections: [
          { id: 33, displayOrder: 0 },
          { id: 11, displayOrder: 1 },
        ],
      }),
    ).rejects.toThrow(
      'Reorder payload must include all sections in the "filament" domain. Expected 3 sections but received 2.',
    );

    expect(tx.section.update).not.toHaveBeenCalled();
  });

  it('rejects payloads with ids outside the domain and reports membership mismatch', async () => {
    const { service, tx } = createServiceWithMockTransaction();

    tx.section.findMany.mockResolvedValueOnce([{ id: 11 }, { id: 22 }]);

    await expect(
      service.reorderSections({
        sections: [
          { id: 11, displayOrder: 0 },
          { id: 99, displayOrder: 1 },
        ],
      }),
    ).rejects.toThrow(
      'Reorder payload must exactly match section ids in the global domain (missing ids: 22; unexpected ids: 99).',
    );

    expect(tx.section.update).not.toHaveBeenCalled();
  });
});
