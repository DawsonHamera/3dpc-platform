import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.file.findMany({
      include: { uploader: true },
    });
  }

  findOne(id: number) {
    return this.prisma.file.findUnique({
      where: { id },
      include: { uploader: true },
    });
  }

  create(data: any) {
    return this.prisma.file.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.file.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.file.delete({ where: { id } });
  }
}
