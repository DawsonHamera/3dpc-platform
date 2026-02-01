import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(limit?: number, filter?: string) {
    return this.prisma.activity_log.findMany({
      where: filter
        ? {
            OR: [
              { action_type: { contains: filter } },
              { user: { name: { contains: filter } } },
            ],
          }
        : undefined,
      orderBy: { created_at: 'desc' },
      include: { user: true },
      take: limit,
    });
  }

  findByUserId(userId: number) {
    return this.prisma.activity_log.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
    });
  }
}
