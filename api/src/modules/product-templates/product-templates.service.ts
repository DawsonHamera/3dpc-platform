import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductTemplatesService {
  constructor(private readonly prisma: PrismaService) {}

  findAllProductTemplates() {
    return this.prisma.product_template.findMany();
  }

  findProductTemplateById(id: number) {
    return this.prisma.product_template.findUnique({ where: { id } });
  }

  createProductTemplate(data: any) {
    return this.prisma.product_template.create({ data });
  }

  updateProductTemplate(id: number, data: any) {
    return this.prisma.product_template.update({ where: { id }, data });
  }

  deleteProductTemplate(id: number) {
    return this.prisma.product_template.delete({ where: { id } });
  }
}
