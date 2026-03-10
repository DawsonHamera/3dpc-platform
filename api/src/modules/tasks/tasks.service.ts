import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  findAllTasks() {
    return this.prisma.task.findMany({ include: { assigned_user: true } });
  }

  findTaskById(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
      include: { assigned_user: true },
    });
  }

  findTasksByUserId(userId: number) {
    return this.prisma.task.findMany({
      where: {
        assigned_to: userId,
      },
    });
  }

  findOpenTasks() {
    return this.prisma.task.findMany({
      where: {
        is_open: true,
      },
    });
  }

  findAllByUsers() {
    return this.prisma.user.findMany({
      where: {
        tasks: {
          some: {}, // Ensures only users with tasks are included
        },
      },
      select: {
        id: true,
        name: true,
        tasks: true,
      },
    });
  }

  /**
   * Create a new task
   * DATETIME STANDARD: Expects scheduled_date as UTC ISO string from client.
   * Stores as UTC in database.
   */
  createTask(data: any) {
    if (data.assigned_to) {
      data.assigned_user = { connect: { id: data.assigned_to } };
      delete data.assigned_to;
    }

    // Convert scheduled_date from UTC ISO string to Date object
    if (data.scheduled_date) {
      data.scheduled_date = new Date(data.scheduled_date);
    }

    return this.prisma.task.create({ data });
  }

  /**
   * Update an existing task
   * DATETIME STANDARD: Expects scheduled_date as UTC ISO string from client.
   * Converts to Date object before database update.
   */
  updateTask(id: number, data: any) {
    // Convert scheduled_date from UTC ISO string to Date object
    if (data.scheduled_date) {
      data.scheduled_date = new Date(data.scheduled_date);
    }

    return this.prisma.task.update({ where: { id }, data });
  }

  deleteTask(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }

  async claimTask(id: number, userId: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });

    if (!task) {
      throw new Error('Task not found');
    }

    if (task.is_open === false) {
      throw new Error('Task is already claimed');
    }

    return this.prisma.task.update({
      where: { id },
      data: {
        assigned_to: userId,
        is_open: false,
      },
    });
  }

  async releaseTask(id: number, user: any) {
    const task = await this.prisma.task.findUnique({ where: { id } });

    if (!task) {
      throw new Error('Task not found');
    }
    if (task.assigned_to !== user.id && user.role !== 'admin') {
      throw new Error('You do not have permission to release this task');
    }

    return this.prisma.task.update({
      where: { id },
      data: {
        assigned_to: null,
        is_open: true,
      },
    });
  }
}
