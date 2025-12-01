import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MaterialsService {
  constructor(private readonly prisma: PrismaService) {}

  findAllMaterials() {
    return this.prisma.material.findMany({ include: { image_file: true } });
  }

  findMaterialById(id: number) {
    return this.prisma.material.findUnique({
      where: { id },
      include: { image_file: true },
    });
  }

  createMaterial(data: any) {
    return this.prisma.material.create({ data });
  }

  updateMaterial(id: number, data: any) {
    return this.prisma.material.update({ where: { id }, data });
  }

  deleteMaterial(id: number) {
    return this.prisma.material.delete({ where: { id } });
  }
}
