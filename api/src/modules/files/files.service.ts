import { Injectable } from '@nestjs/common';

import { File } from './entities/file.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.files.findMany({
      include: { uploader: true },
    });
  }

  findOne(id: number) {
    return this.prisma.files.findUnique({
      where: { id },
      include: { uploader: true },
    });
  }

  create(data: any) {
    return this.prisma.files.create({ data });
  }

  async update(id: number, data: any){
    return this.prisma.files.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.files.delete({ where: { id } });
  }
}
