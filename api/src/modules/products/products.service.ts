import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import {
  SectionOrderItemDto,
  UpdateSectionOrderDto,
} from './dto/update-section-order.dto';

export function validateSectionOrderInvariants(
  sections: SectionOrderItemDto[],
): void {
  const seenIds = new Set<number>();
  const duplicateIds = new Set<number>();
  const seenDisplayOrders = new Set<number>();
  const duplicateDisplayOrders = new Set<number>();

  for (const section of sections) {
    if (seenIds.has(section.id)) {
      duplicateIds.add(section.id);
    }
    seenIds.add(section.id);

    if (seenDisplayOrders.has(section.displayOrder)) {
      duplicateDisplayOrders.add(section.displayOrder);
    }
    seenDisplayOrders.add(section.displayOrder);
  }

  if (duplicateIds.size > 0) {
    throw new BadRequestException(
      `Duplicate section ids are not allowed: ${Array.from(duplicateIds).join(
        ', ',
      )}`,
    );
  }

  if (duplicateDisplayOrders.size > 0) {
    throw new BadRequestException(
      `Duplicate displayOrder values are not allowed: ${Array.from(
        duplicateDisplayOrders,
      ).join(', ')}`,
    );
  }

  const expectedDisplayOrders = new Set(
    Array.from({ length: sections.length }, (_, index) => index),
  );
  const invalidDisplayOrders = sections
    .map((section) => section.displayOrder)
    .filter((displayOrder) => !expectedDisplayOrders.has(displayOrder));

  if (invalidDisplayOrders.length > 0) {
    throw new BadRequestException(
      `displayOrder values must be a contiguous 0-based sequence from 0 to ${
        sections.length - 1
      }`,
    );
  }
}

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  findAllProducts(type?: string) {
    return this.prisma.product.findMany({
      where: { type: type || undefined },
      include: { variants: { include: { image: true } } },
    });
  }

  findAllSections(type?: string) {
    return this.prisma.section.findMany({
      where: { type: type || undefined },
      orderBy: [{ display_order: 'asc' }, { id: 'asc' }],
    });
  }

  findProductById(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { variants: { include: { image: true } } },
    });
  }

  findVariantById(variantId: number) {
    return this.prisma.product_variant.findUnique({
      where: { id: variantId },
      include: { image: true },
    });
  }

  createSection(data: any) {
    return this.prisma.section.create({ data });
  }

  createProduct(data: any) {
    return this.prisma.product.create({ data });
  }

  createVariant(productId: number, data: any) {
    return this.prisma.product_variant.create({
      data: { ...data, product_id: productId },
    });
  }

  updateSection(id: number, data: any) {
    return this.prisma.section.update({ where: { id }, data });
  }

  updateProduct(id: number, data: any) {
    return this.prisma.product.update({ where: { id }, data });
  }

  updateVariant(variantId: number, data: any) {
    return this.prisma.product_variant.update({
      where: { id: variantId },
      data,
    });
  }

  deleteSection(id: number) {
    return this.prisma.section.delete({ where: { id } });
  }

  deleteProduct(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }

  deleteVariant(id: number) {
    return this.prisma.product_variant.delete({ where: { id: id } });
  }

  async reorderSections(updateDto: UpdateSectionOrderDto) {
    // Contract: caller must provide the complete section list for the selected domain.
    validateSectionOrderInvariants(updateDto.sections);

    return this.prisma.$transaction(async (tx) => {
      const sectionIds = updateDto.sections.map((item) => item.id);
      const domainFilter = { type: updateDto.type || undefined };

      const existingSectionsInDomain = await tx.section.findMany({
        where: domainFilter,
        select: { id: true },
      });

      if (existingSectionsInDomain.length !== sectionIds.length) {
        throw new BadRequestException(
          `Reorder payload must include all sections in the ${
            updateDto.type ? `"${updateDto.type}"` : 'global'
          } domain. Expected ${existingSectionsInDomain.length} sections but received ${sectionIds.length}.`,
        );
      }

      const existingSectionIds = new Set(
        existingSectionsInDomain.map((section) => section.id),
      );
      const missingIds = existingSectionsInDomain
        .map((section) => section.id)
        .filter((id) => !sectionIds.includes(id));
      const unexpectedIds = sectionIds.filter(
        (id) => !existingSectionIds.has(id),
      );

      if (missingIds.length > 0 || unexpectedIds.length > 0) {
        const membershipIssues: string[] = [];

        if (missingIds.length > 0) {
          membershipIssues.push(`missing ids: ${missingIds.join(', ')}`);
        }
        if (unexpectedIds.length > 0) {
          membershipIssues.push(`unexpected ids: ${unexpectedIds.join(', ')}`);
        }

        throw new BadRequestException(
          `Reorder payload must exactly match section ids in the ${
            updateDto.type ? `"${updateDto.type}"` : 'global'
          } domain (${membershipIssues.join('; ')}).`,
        );
      }

      await Promise.all(
        updateDto.sections.map((item) =>
          tx.section.update({
            where: { id: item.id },
            data: { display_order: item.displayOrder },
          }),
        ),
      );

      return tx.section.findMany({
        where: domainFilter,
        orderBy: [{ display_order: 'asc' }, { id: 'asc' }],
      });
    });
  }
}
