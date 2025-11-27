import { Injectable, ConflictException } from '@nestjs/common';
import { attendance_status, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.event.findMany({
      orderBy: { start_time: 'desc' },
      include: {
        image_file: true,
        attendances: { include: { user: true } },
      },
    });
  }

  findOne(id: number) {
    return this.prisma.event.findUnique({
      where: { id },
      include: {
        image_file: true,
        attendances: { include: { user: true } },
      },
    });
  }

  findEventCode(id: number) {
    return this.prisma.event.findUnique({
      where: { id },
      select: { verification_code: true },
    });
  }

  findAttendance(eventId, userId) {
    return this.prisma.attendance.findUnique({
      where: {
        event_id_user_id: {
          event_id: eventId,
          user_id: userId,
        },
      },
    });
  }

  findCurrent() {
    return this.prisma.event.findFirst({
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

  create(data: any, created_by?: number) {
    const verification_code = Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

    const eventData: Prisma.eventCreateInput = {
      title: data.title,
      description: data.description,
      location: data.location,
      image_file: {
        connect: { id: data.image_file_id },
      },
      start_time: new Date(data.start_time),
      end_time: new Date(data.end_time),
      verification_code,
      created_by: { connect: { id: created_by } },
    };

    return this.prisma.event.create({ data: eventData });
  }

  update(id: number, data: any) {
    if (data.image_file_id) {
      data.image_file = { connect: { id: data.image_file_id } };
      delete data.image_file_id;
    }

    return this.prisma.event.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.event.delete({ where: { id } });
  }

  async attendEvent(
    eventId: number,
    userId: number,
    code?: string,
    status?: string,
  ) {
    const existingAttendance = await this.prisma.attendance.findUnique({
      where: {
        event_id_user_id: {
          event_id: eventId,
          user_id: userId,
        },
      },
    });

    const event = await this.prisma.event.findUnique({
      where: { id: eventId },
      select: {
        verification_code: true,
        start_time: true,
        end_time: true,
      },
    });

    if (!event) {
      throw new ConflictException('Event does not exist');
    }

    if (status && !['going', 'maybe', 'not_going'].includes(status)) {
      throw new ConflictException('Invalid RSVP status');
    }

    if (existingAttendance) {
      // Already attended case
      if (existingAttendance.status === attendance_status.attended) {
        throw new ConflictException('You have already attended this event');
      }
      // Update to attended case
      if (event.start_time <= new Date() && event.end_time >= new Date()) {
        if (event.verification_code !== code) {
          throw new ConflictException('Invalid event code');
        }
        return this.prisma.attendance.update({
          where: {
            event_id_user_id: {
              event_id: eventId,
              user_id: userId,
            },
          },
          data: {
            status: attendance_status.attended,
            arrival_time: new Date(),
          },
        });
      }
      // Update RSVP status case
      if (event.start_time > new Date() && status) {
        return this.prisma.attendance.update({
          where: {
            event_id_user_id: {
              event_id: eventId,
              user_id: userId,
            },
          },
          data: {
            status: attendance_status[status as keyof typeof attendance_status],
          },
        });
      }
    } else {
      // Attend without initial rsvp case
      if (event.start_time <= new Date() && event.end_time >= new Date()) {
        if (event.verification_code !== code) {
          throw new ConflictException('Invalid event code');
        }
        return this.prisma.attendance.create({
          data: {
            user: { connect: { id: userId } },
            event: { connect: { id: eventId } },
            status: attendance_status.attended,
            arrival_time: new Date(),
          },
        });
      }
      // Rsvp case
      if (event.start_time > new Date() && status) {
        return this.prisma.attendance.create({
          data: {
            user: { connect: { id: userId } },
            event: { connect: { id: eventId } },
            status: attendance_status[status as keyof typeof attendance_status],
          },
        });
      }

      throw new ConflictException('Event has already ended');
    }
  }
}
