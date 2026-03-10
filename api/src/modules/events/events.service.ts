import { ConflictException, Injectable } from '@nestjs/common';
import { attendance_status, events_event_type, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { success } from 'src/utils/response';
import { UsersService } from '../users/users.service';

@Injectable()
export class EventsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Find all events with optional filtering, sorting, and grouping
   * DATETIME STANDARD: Returns datetime fields as Date objects which are serialized
   * to UTC ISO strings by NestJS when sent to client.
   */
  async findAll(
    filter?: string,
    sort?: string,
    limit?: number,
    groupBy?: string,
  ) {
    const events = await this.prisma.event.findMany({
      orderBy: { start_time: 'desc' },
      include: {
        image_file: true,
        attendances: { include: { user: true } },
      },
    });

    let mutatedEvents = [...events];

    // Step 1: Apply filtering first
    switch (filter) {
      case 'upcoming':
        mutatedEvents = mutatedEvents.filter(
          (event) => event.start_time > new Date(),
        );
        break;
      case 'past':
        mutatedEvents = mutatedEvents.filter(
          (event) => event.end_time < new Date(),
        );
        break;
      case 'current':
        mutatedEvents = mutatedEvents.filter(
          (event) =>
            event.start_time <= new Date() && event.end_time >= new Date(),
        );
        break;
      // Add more filtering options as needed
    }

    // Step 2: Apply sorting
    switch (sort) {
      case 'start_time_asc':
        mutatedEvents.sort(
          (a, b) => a.start_time.getTime() - b.start_time.getTime(),
        );
        break;
      case 'start_time_desc':
        mutatedEvents.sort(
          (a, b) => b.start_time.getTime() - a.start_time.getTime(),
        );
        break;
      // Add more sorting options as needed
    }

    // Step 3: Handle groupBy (returns early with grouped data)
    switch (groupBy) {
      case 'time-relative': {
        const grouped = {
          upcoming: mutatedEvents.filter(
            (event) => event.start_time > new Date(),
          ),
          current: mutatedEvents.filter(
            (event) =>
              event.start_time <= new Date() && event.end_time >= new Date(),
          ),
          past: mutatedEvents.filter((event) => event.end_time < new Date()),
        };

        // Apply limit to each group if specified
        if (limit && limit > 0) {
          grouped.upcoming = grouped.upcoming.slice(0, limit);
          grouped.current = grouped.current.slice(0, limit);
          grouped.past = grouped.past.slice(0, limit);
        }

        return grouped;
      }
    }

    // Step 4: Apply limit last
    if (limit && limit > 0) {
      mutatedEvents = mutatedEvents.slice(0, limit);
    }

    return mutatedEvents;
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

  /**
   * Create a new event
   * DATETIME STANDARD: Expects start_time and end_time as UTC ISO strings from client.
   * Stores as UTC in database.
   */
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
      // Parse UTC ISO strings to Date objects for database storage
      start_time: new Date(data.start_time),
      end_time: new Date(data.end_time),
      verification_code,
      created_by: { connect: { id: created_by } },
    };

    return this.prisma.event.create({ data: eventData });
  }

  /**
   * Update an existing event
   * DATETIME STANDARD: Expects start_time and end_time as UTC ISO strings from client.
   * Converts to Date objects before database update.
   */
  update(id: number, data: any) {
    console.log('Updating event with data:', data);

    // Handle datetime fields - convert UTC ISO strings to Date objects
    if (data.start_time) {
      data.start_time = new Date(data.start_time);
    }
    if (data.end_time) {
      data.end_time = new Date(data.end_time);
    }

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

  /**
   * Mark attendance for an event
   * DATETIME STANDARD: Sets arrival_time to current UTC time using new Date().
   * Compares event times with current UTC time.
   */
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
