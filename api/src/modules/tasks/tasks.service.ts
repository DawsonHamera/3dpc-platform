import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma, task_status } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import type { JwtUser } from '../../common/types/jwt-user.type';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksHooks } from './tasks.hooks';

const taskInclude = {
  assigned_user: true,
  order_item: {
    include: {
      order: true,
      product: true,
      product_variant: true,
    },
  },
} satisfies Prisma.taskInclude;

@Injectable()
export class TasksService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly tasksHooks: TasksHooks,
  ) {}

  findAllTasks() {
    return this.prisma.task.findMany({ include: taskInclude });
  }

  findTaskById(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
      include: taskInclude,
    });
  }

  findTasksByUserId(userId: number) {
    return this.prisma.task.findMany({
      where: {
        assigned_to: userId,
      },
      include: taskInclude,
    });
  }

  findOpenTasks() {
    return this.prisma.task.findMany({
      where: {
        is_open: true,
      },
      include: taskInclude,
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
        tasks: {
          include: {
            order_item: true,
          },
        },
      },
    });
  }

  /**
   * Create a new task
   * DATETIME STANDARD: Expects scheduled_date as UTC ISO string from client.
   * Stores as UTC in database.
   */
  createTask(data: CreateTaskDto) {
    const createData: Prisma.taskCreateInput = {
      title: data.title,
      type: data.type,
      details: data.details as Prisma.InputJsonValue,
      status: data.status,
      hooks: data.hooks as Prisma.InputJsonValue,
      is_required: data.is_required,
      is_open: data.is_open,
      scheduled_date: data.scheduled_date
        ? new Date(data.scheduled_date)
        : undefined,
      assigned_user: data.assigned_to
        ? {
            connect: { id: data.assigned_to },
          }
        : undefined,
      order_item: data.order_item_id
        ? {
            connect: { id: data.order_item_id },
          }
        : undefined,
    };

    return this.prisma.task.create({
      data: createData,
      include: taskInclude,
    });
  }

  /**
   * Update an existing task
   * DATETIME STANDARD: Expects scheduled_date as UTC ISO string from client.
   * Converts to Date object before database update.
   */
  async updateTask(id: number, data: UpdateTaskDto) {
    return this.prisma.$transaction(async (tx) => {
      const existingTask = await tx.task.findUnique({
        where: { id },
        select: {
          status: true,
          order_item_id: true,
        },
      });

      if (!existingTask) {
        throw new NotFoundException('Task not found');
      }

      const updatedTask = await tx.task.update({
        where: { id },
        data: {
          title: data.title,
          type: data.type,
          details: data.details as Prisma.InputJsonValue,
          status: data.status,
          hooks: data.hooks as Prisma.InputJsonValue,
          is_required: data.is_required,
          is_open: data.is_open,
          scheduled_date: data.scheduled_date
            ? new Date(data.scheduled_date)
            : undefined,
          assigned_to: data.assigned_to,
          order_item_id: data.order_item_id,
        },
        include: taskInclude,
      });

      await this.runTaskStatusSideEffectsInTransaction(
        tx,
        existingTask,
        updatedTask,
      );

      return updatedTask;
    });
  }

  deleteTask(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }

  async claimTask(id: number, userId: number) {
    return this.prisma.$transaction(async (tx) => {
      const claimResult = await tx.task.updateMany({
        where: { id, is_open: true },
        data: {
          assigned_to: userId,
          is_open: false,
        },
      });

      if (claimResult.count === 0) {
        const existingTask = await tx.task.findUnique({ where: { id } });
        if (!existingTask) {
          throw new NotFoundException('Task not found');
        }
        throw new ForbiddenException('Task is already claimed');
      }

      const claimedTask = await tx.task.findUnique({
        where: { id },
        include: taskInclude,
      });

      if (!claimedTask) {
        throw new NotFoundException('Task not found');
      }

      if (claimedTask.status === task_status.pending) {
        const inProgressTask = await tx.task.update({
          where: { id },
          data: { status: task_status.in_progress },
          include: taskInclude,
        });

        await this.runTaskStatusSideEffectsInTransaction(
          tx,
          claimedTask,
          inProgressTask,
        );
        return inProgressTask;
      }

      return claimedTask;
    });
  }

  async releaseTask(id: number, user: JwtUser) {
    return this.prisma.$transaction(async (tx) => {
      const task = await tx.task.findUnique({
        where: { id },
        select: {
          status: true,
          order_item_id: true,
          assigned_to: true,
        },
      });

      if (!task) {
        throw new NotFoundException('Task not found');
      }

      const userId = +user.id;
      const roleName = user.role?.name;

      if (task.assigned_to !== userId && roleName !== 'admin') {
        throw new ForbiddenException(
          'You do not have permission to release this task',
        );
      }

      const updatedTask = await tx.task.update({
        where: { id },
        data: {
          assigned_to: null,
          is_open: true,
          status:
            task.status === task_status.in_progress
              ? task_status.pending
              : undefined,
        },
        include: taskInclude,
      });

      await this.runTaskStatusSideEffectsInTransaction(tx, task, updatedTask);

      return updatedTask;
    });
  }

  async updateTaskStatus(id: number, status: task_status, user: JwtUser) {
    return this.prisma.$transaction(async (tx) => {
      const existingTask = await tx.task.findUnique({
        where: { id },
        select: {
          status: true,
          order_item_id: true,
          assigned_to: true,
        },
      });

      if (!existingTask) {
        throw new NotFoundException('Task not found');
      }

      const userId = +user.id;
      const roleName = user.role?.name;
      const isAdmin = roleName === 'admin';
      const isAssignee = existingTask.assigned_to === userId;

      if (!isAdmin && !isAssignee) {
        throw new ForbiddenException(
          'You do not have permission to update this task status',
        );
      }

      const updatedTask = await tx.task.update({
        where: { id },
        data: { status },
        include: taskInclude,
      });

      await this.runTaskStatusSideEffectsInTransaction(
        tx,
        existingTask,
        updatedTask,
      );

      return updatedTask;
    });
  }

  private async runTaskStatusSideEffectsInTransaction(
    tx: Prisma.TransactionClient,
    previousTask: { status: task_status; order_item_id: number | null },
    nextTask: {
      status: task_status;
      order_item_id: number | null;
      details: Prisma.JsonValue;
      hooks: Prisma.JsonValue | null;
    },
  ) {
    if (previousTask.status === nextTask.status) {
      return;
    }

    const impactedOrderIds = new Set<number>();
    const transitionOrderId = await this.syncOrderItemStatusFromTaskTransition(
      tx,
      previousTask,
      nextTask,
    );

    if (transitionOrderId) {
      impactedOrderIds.add(transitionOrderId);
    }

    const hookImpactedOrderIds = await this.tasksHooks.parseHooks(nextTask, tx);
    for (const orderId of hookImpactedOrderIds) {
      impactedOrderIds.add(orderId);
    }

    for (const orderId of impactedOrderIds) {
      await this.recomputeOrderStatus(tx, orderId);
    }
  }

  private async syncOrderItemStatusFromTaskTransition(
    tx: Prisma.TransactionClient,
    previousTask: { status: task_status; order_item_id: number | null },
    nextTask: { status: task_status; order_item_id: number | null },
  ): Promise<number | null> {
    const linkedOrderItemId =
      nextTask.order_item_id ?? previousTask.order_item_id;

    if (!linkedOrderItemId || previousTask.status === nextTask.status) {
      return null;
    }

    const nextOrderItemStatus = this.mapTaskStatusToOrderItemStatus(
      nextTask.status,
    );

    if (!nextOrderItemStatus) {
      return null;
    }

    const orderItem = await tx.order_item.update({
      where: { id: linkedOrderItemId },
      data: { status: nextOrderItemStatus },
      select: { order_id: true },
    });

    return orderItem.order_id;
  }

  private async recomputeOrderStatus(
    tx: Prisma.TransactionClient,
    orderId: number,
  ): Promise<void> {
    const siblingItems = await tx.order_item.findMany({
      where: { order_id: orderId },
      select: { status: true },
    });

    const orderStatus = this.getOrderStatusFromOrderItems(
      siblingItems.map((item) => item.status),
    );

    await tx.order.update({
      where: { id: orderId },
      data: { status: orderStatus },
    });
  }

  private mapTaskStatusToOrderItemStatus(
    status: task_status,
  ): 'pending' | 'in_progress' | 'completed' | 'failed' | null {
    switch (status) {
      case task_status.pending:
        return 'pending';
      case task_status.in_progress:
        return 'in_progress';
      case task_status.completed:
        return 'completed';
      case task_status.failed:
      case task_status.cancelled:
        return 'failed';
      default:
        return null;
    }
  }

  private getOrderStatusFromOrderItems(statuses: string[]): string {
    if (statuses.length === 0) {
      return 'pending';
    }

    if (statuses.every((status) => status === 'completed')) {
      return 'completed';
    }

    if (statuses.some((status) => status === 'failed')) {
      return 'failed';
    }

    if (statuses.some((status) => status === 'in_progress')) {
      return 'in_progress';
    }

    return 'pending';
  }
}
