import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findPoints() {
    return this.prisma.user.findMany({
      select: {
        name: true,
        points: true,
      },
    });
  }

  create(data: any) {
    return this.prisma.user.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.user.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async updateUserPoints(
    id: number,
    points: number,
    reason: string,
    details?: string,
  ) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) return null;

    const pointLog = {
      user: { connect: { id } },
      change: points,
      reason,
      details,
    };

    user.points += points;
    await this.prisma.user.update({
      where: { id },
      data: { points: user.points },
    });
    await this.prisma.point_log.create({ data: pointLog });
    return user;
  }

  getUserPointsLogs(id: number) {
    return this.prisma.point_log.findMany({
      where: { user: { id } },
      include: { user: true },
    });
  }
}
