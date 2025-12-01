import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ModelsService {
  constructor(private readonly prisma: PrismaService) {}

  findAllModels() {
    return this.prisma.model.findMany({
      include: {
        file: true,
        image_file: true,
      },
    });
  }

  findModelById(id: number) {
    return this.prisma.model.findUnique({
      where: { id },
      include: {
        file: true,
        image_file: true,
      },
    });
  }

  createModel(data: any) {
    return this.prisma.model.create({ data });
  }

  updateModel(id: number, data: any) {
    return this.prisma.model.update({ where: { id }, data });
  }

  deleteModel(id: number) {
    return this.prisma.model.delete({ where: { id } });
  }
}
