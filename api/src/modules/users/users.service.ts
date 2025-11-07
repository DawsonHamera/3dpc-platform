import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.users.findMany();
  }

  findOne(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  create(data: any) {
    return this.prisma.users.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.users.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.users.delete({ where: { id } });
  }
}
