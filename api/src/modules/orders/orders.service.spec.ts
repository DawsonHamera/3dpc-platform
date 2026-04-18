import { NotFoundException } from '@nestjs/common';
import { task_type } from '@prisma/client';
import { OrdersService } from './orders.service';

describe('OrdersService.generateTasksFromOrder', () => {
  const prisma = {
    order: {
      findUnique: jest.fn(),
    },
    order_item: {
      findFirst: jest.fn(),
      update: jest.fn(),
      deleteMany: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  let service: OrdersService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new OrdersService(prisma as never);
  });

  it('throws NotFoundException when order does not exist', async () => {
    prisma.order.findUnique.mockResolvedValue(null);

    await expect(service.generateTasksFromOrder(999)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });

  it('skips order items that already have tasks by default', async () => {
    prisma.order.findUnique.mockResolvedValue({
      id: 10,
      order_items: [
        {
          id: 101,
          quantity: 1,
          product_id: 1,
          product_variant_id: 2,
          product: { name: 'Keychain' },
          product_variant: { name: 'Red' },
          tasks: [{ id: 501 }],
        },
        {
          id: 102,
          quantity: 2,
          product_id: 1,
          product_variant_id: 3,
          product: { name: 'Keychain' },
          product_variant: { name: 'Blue' },
          tasks: [],
        },
      ],
    });

    prisma.$transaction.mockImplementation(async (callback) => {
      const tx = {
        task: {
          create: jest.fn().mockResolvedValue({ id: 901 }),
        },
      };
      return callback(tx);
    });

    const result = await service.generateTasksFromOrder(10);

    expect(result.created_count).toBe(1);
    expect(result.skipped_count).toBe(1);
  });

  it('creates tasks for all items when force is true', async () => {
    prisma.order.findUnique.mockResolvedValue({
      id: 11,
      order_items: [
        {
          id: 201,
          quantity: 1,
          product_id: 1,
          product_variant_id: 2,
          product: { name: 'Widget' },
          product_variant: { name: 'Standard' },
          tasks: [{ id: 701 }],
        },
      ],
    });

    let createCallArgs: unknown;
    prisma.$transaction.mockImplementation(async (callback) => {
      const tx = {
        task: {
          create: jest.fn().mockImplementation(async (args) => {
            createCallArgs = args;
            return { id: 902 };
          }),
        },
      };
      return callback(tx);
    });

    const result = await service.generateTasksFromOrder(11, { force: true });

    expect(result.created_count).toBe(1);
    expect((createCallArgs as { data: { type: task_type } }).data.type).toBe(
      task_type.print_job,
    );
  });

  it('skips duplicates created concurrently and reports accurate counts', async () => {
    prisma.order.findUnique.mockResolvedValue({
      id: 12,
      order_items: [
        {
          id: 301,
          quantity: 1,
          product_id: 1,
          product_variant_id: 2,
          product: { name: 'Widget' },
          product_variant: { name: 'Standard' },
          tasks: [],
        },
        {
          id: 302,
          quantity: 3,
          product_id: 4,
          product_variant_id: 5,
          product: { name: 'Badge' },
          product_variant: { name: 'Green' },
          tasks: [],
        },
      ],
    });

    prisma.$transaction.mockImplementation(async (callback) => {
      const tx = {
        task: {
          create: jest
            .fn()
            .mockRejectedValueOnce({ code: 'P2002' })
            .mockResolvedValueOnce({ id: 903 }),
        },
      };
      return callback(tx);
    });

    const result = await service.generateTasksFromOrder(12);

    expect(result).toMatchObject({
      order_id: 12,
      created_count: 1,
      skipped_count: 1,
    });
    expect(result.tasks).toHaveLength(1);
  });

  it('scopes updateOrderItem by orderId and itemId', async () => {
    prisma.order_item.findFirst.mockResolvedValue({ id: 50 });
    prisma.order_item.update.mockResolvedValue({ id: 50, order_id: 7 });

    await service.updateOrderItem(7, 50, { status: 'in_progress' });

    expect(prisma.order_item.findFirst).toHaveBeenCalledWith({
      where: { id: 50, order_id: 7 },
      select: { id: true },
    });
    expect(prisma.order_item.update).toHaveBeenCalledWith({
      where: { id: 50 },
      data: {
        product_id: undefined,
        product_variant_id: undefined,
        quantity: undefined,
        status: 'in_progress',
      },
    });
  });

  it('throws when updateOrderItem item is outside order scope', async () => {
    prisma.order_item.findFirst.mockResolvedValue(null);

    await expect(
      service.updateOrderItem(7, 50, { status: 'completed' }),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('scopes deleteOrderItem by orderId and itemId', async () => {
    prisma.order_item.deleteMany.mockResolvedValue({ count: 1 });

    const result = await service.deleteOrderItem(7, 50);

    expect(prisma.order_item.deleteMany).toHaveBeenCalledWith({
      where: { id: 50, order_id: 7 },
    });
    expect(result).toEqual({ success: true });
  });

  it('throws when deleteOrderItem item is outside order scope', async () => {
    prisma.order_item.deleteMany.mockResolvedValue({ count: 0 });

    await expect(service.deleteOrderItem(7, 50)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
