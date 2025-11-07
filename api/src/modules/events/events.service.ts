import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.events.findMany();
  }

  findOne(id: number) {
    return this.prisma.events.findUnique({ where: { id } });
  }

  findCurrent() {
    return this.prisma.events.findFirst({
      where: {
        start_time: {
          lte: new Date(),
        },
        end_time: {
          gte: new Date(),
        },
      },
    });
  }

  create(data: any) {
    return this.prisma.events.create({ data });
  }

  update(id: number, data: any) {
    return this.prisma.events.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.events.delete({ where: { id } });
  }

  async attendEvent(eventId: number, userId: number) {
    const existingAttendance = await this.prisma.attendances.findUnique({
      where: {
        event_id_user_id: {
          event_id: eventId,
          user_id: userId,
        },
      },
    });
    if (existingAttendance) {
      throw new ConflictException('User is already attending this event');
    }

    const data = {
      user: { connect: { id: userId } },
      event: { connect: { id: eventId } },
    };

    return this.prisma.attendances.create({ data });
  }
}
