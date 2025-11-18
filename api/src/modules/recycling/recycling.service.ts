import { Injectable } from '@nestjs/common';
import { recycling_type } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { LogRecyclingDto } from './dto/log-recycling.dto';

@Injectable()
export class RecyclingService {
  constructor(private readonly prisma: PrismaService) {}

  async getStats() {
    const result = await this.prisma.recycling_log.groupBy({
      by: ['type'],
      _sum: {
        amount: true,
      },
    });

    const stats = {
      bottles: 0,
      filamentCreated: 0,
      filamentUsed: 0,
    };
    for (const row of result) {
      if (row.type === recycling_type.bottle) {
        stats.bottles = row._sum.amount ?? 0;
      } else if (row.type === recycling_type.filament_created) {
        stats.filamentCreated = row._sum.amount ?? 0;
      } else if (row.type === recycling_type.filament_used) {
        stats.filamentUsed = row._sum.amount ?? 0;
      }
    }
    return stats;
  }

  findAll() {
    return this.prisma.recycling_log.findMany({
      orderBy: { created_at: 'desc' },
      include: { created_by: true },
    });
  }

  findOne(id: number) {
    return this.prisma.recycling_log.findUnique({ where: { id } });
  }

  logRecycling(userId: number, data: LogRecyclingDto) {
    return this.prisma.recycling_log.create({
      data: {
        amount: data.amount,
        type: data.type as recycling_type,
        created_by: { connect: { id: userId } },
      },
    });
  }

  remove(id: number) {
    return this.prisma.recycling_log.delete({ where: { id } });
  }
}
