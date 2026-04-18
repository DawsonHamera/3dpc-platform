import { Injectable } from '@nestjs/common';
import type { Prisma, task_status } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

type TaskHookTrigger = {
  type: 'status';
  status: string;
};

type TaskHookCondition = {
  type: 'order_full';
};

type UpdateOrderItemStatusAction = {
  type: 'update_order_item_status';
  status: string;
};

type TaskHook = {
  trigger: TaskHookTrigger;
  condition?: TaskHookCondition;
  action: UpdateOrderItemStatusAction;
};

type TaskWithHookData = {
  status: task_status;
  order_item_id: number | null;
  hooks: Prisma.JsonValue | null;
  details: Prisma.JsonValue;
};

type HookPrismaClient = Prisma.TransactionClient | PrismaService;

@Injectable()
export class TasksHooks {
  constructor(private readonly prisma: PrismaService) {}

  async parseHooks(
    task: TaskWithHookData,
    client: HookPrismaClient = this.prisma,
  ): Promise<number[]> {
    const hooks = Array.isArray(task.hooks)
      ? (task.hooks as unknown as TaskHook[])
      : [];
    const touchedOrderIds = new Set<number>();

    for (const hook of hooks) {
      switch (hook.trigger.type) {
        case 'status':
          if (hook.trigger.status !== task.status) {
            continue;
          }
          break;

        default:
          continue;
      }

      if (hook.condition) {
        switch (hook.condition.type) {
          case 'order_full':
            break;
          default:
            continue;
        }
      }

      switch (hook.action.type) {
        case 'update_order_item_status': {
          const orderItemId = this.getOrderItemId(task);
          if (orderItemId) {
            const updatedOrderItem = await client.order_item.update({
              where: { id: orderItemId },
              data: { status: hook.action.status },
              select: { order_id: true },
            });
            touchedOrderIds.add(updatedOrderItem.order_id);
          }
          break;
        }
        default:
          continue;
      }
    }

    return [...touchedOrderIds];
  }

  private getOrderItemId(task: TaskWithHookData): number | null {
    if (task.order_item_id) {
      return task.order_item_id;
    }

    const { details } = task;

    if (!details || typeof details !== 'object' || Array.isArray(details)) {
      return null;
    }

    const maybeOrderItemId = (details as Record<string, unknown>).orderItemId;
    if (typeof maybeOrderItemId !== 'number') {
      return null;
    }

    return maybeOrderItemId;
  }
}
