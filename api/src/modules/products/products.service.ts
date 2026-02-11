import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

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
}
