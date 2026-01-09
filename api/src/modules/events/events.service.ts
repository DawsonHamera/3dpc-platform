import { Injectable, ConflictException } from '@nestjs/common';
import { attendance_status, events_event_type, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from '../users/users.service';
import { success } from 'src/utils/response';

@Injectable()
export class EventsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  async findAll(filter?: string, sort?: string, limit?: number) {
    const events = await this.prisma.event.findMany({
      orderBy: { start_time: 'desc' },
      include: {
        image_file: true,
        attendances: { include: { user: true } },
      },
    });

    switch (sort) {
      case 'start_time_asc':
        events.sort((a, b) => a.start_time.getTime() - b.start_time.getTime());
        break;
      case 'start_time_desc':
        events.sort((a, b) => b.start_time.getTime() - a.start_time.getTime());
        break;
      // Add more sorting options as needed
    }

    switch (filter) {
      case 'upcoming':
        return events.filter((event) => event.start_time > new Date());
      case 'past':
        return events.filter((event) => event.end_time < new Date());
      case 'current':
        return events.filter(
          (event) =>
            event.start_time <= new Date() && event.end_time >= new Date(),
        );
      // Add more filtering options as needed
    }

    if (limit && limit > 0) {
      return events.slice(0, limit);
    }

    return events;
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

  addEventPoints(
    eventType: events_event_type,
    eventId: number,
    userId: number,
  ) {
    const pointsMap = {
      workshop: 20,
      meeting: 10,
      work_day: 25,
      competition: 20,
      fundraiser: 50,
    };

    const points = eventType ? (pointsMap[eventType] ?? 0) : 0;

    this.usersService.updateUserPoints(
      userId,
      points,
      `Attended ${eventType} event`,
      `Event ID: ${eventId}`,
    );

    return success(`${points} points gained for attending!`);
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
        event_type: true,
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

        const attendanceUpdate = await this.prisma.attendance.update({
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

        if (!event.event_type) return attendanceUpdate;

        return this.addEventPoints(event.event_type, eventId, userId);
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

        const attendanceCreate = await this.prisma.attendance.create({
          data: {
            user: { connect: { id: userId } },
            event: { connect: { id: eventId } },
            status: attendance_status.attended,
            arrival_time: new Date(),
          },
        });

        if (!event.event_type) return attendanceCreate;

        return this.addEventPoints(event.event_type, eventId, userId);
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
