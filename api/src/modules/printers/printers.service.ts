import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PrintersService {
  constructor(private readonly prisma: PrismaService) {}

  findAllPrinters() {
    return this.prisma.printer.findMany({
      include: {
        image_file: true,
        loaded_material: true,
      },
    });
  }

  findPrinterById(id: number) {
    return this.prisma.printer.findUnique({
      where: { id },
      include: {
        image_file: true,
        loaded_material: true,
      },
    });
  }

  createPrinter(data: any) {
    return this.prisma.printer.create({ data });
  }

  updatePrinter(id: number, data: any) {
    return this.prisma.printer.update({ where: { id }, data });
  }

  deletePrinter(id: number) {
    return this.prisma.printer.delete({ where: { id } });
  }
}
