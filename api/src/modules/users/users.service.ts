import { Inject, Injectable } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import appConfig from 'src/config/app.config';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(appConfig.KEY)
    private appConfiguration: ConfigType<typeof appConfig>,
  ) {}

  findAll() {
    return this.prisma.user.findMany({ include: { role: true } });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { role: true },
    });
  }

  findPoints() {
    return this.prisma.user.findMany({
      select: {
        name: true,
        points: true,
      },
    });
  }

  async create(data: any) {
    if (data.password) {
      const hashedPassword = await bcrypt.hash(
        data.password,
        this.appConfiguration.bcryptRounds,
      );
      delete data.password;
      data.password_hash = hashedPassword;
    }

    return this.prisma.user.create({ data });
  }

  async update(id: number, data: any) {
    if (data.password) {
      const hashedPassword = await bcrypt.hash(
        data.password,
        this.appConfiguration.bcryptRounds,
      );
      delete data.password;
      data.password_hash = hashedPassword;
    }

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
