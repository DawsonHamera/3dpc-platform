import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { task_status } from '@prisma/client';
import type { JwtUser } from '../../common/types/jwt-user.type';
import { TasksHooks } from './tasks.hooks';
import { TasksService } from './tasks.service';

describe('TasksService critical paths', () => {
  const tx = {
    task: {
      findUnique: jest.fn(),
      update: jest.fn(),
      updateMany: jest.fn(),
    },
    order_item: {
      update: jest.fn(),
      findMany: jest.fn(),
    },
    order: {
      update: jest.fn(),
    },
  };

  const prisma = {
    $transaction: jest.fn(async (handler: (trx: typeof tx) => unknown) =>
      handler(tx),
    ),
  };

  const tasksHooks: Pick<TasksHooks, 'parseHooks'> = {
    parseHooks: jest.fn(),
  };

  let service: TasksService;

  const memberUser: JwtUser = {
    id: '2',
    role: { name: 'member' },
  };

  const adminUser: JwtUser = {
    id: '1',
    role: { name: 'admin' },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    service = new TasksService(prisma as never, tasksHooks as TasksHooks);
    tasksHooks.parseHooks.mockResolvedValue([]);
  });

  it('rejects status updates from non-assigned members (IDOR protection)', async () => {
    tx.task.findUnique.mockResolvedValue({
      status: task_status.pending,
      order_item_id: 77,
      assigned_to: 99,
    });

    await expect(
      service.updateTaskStatus(10, task_status.in_progress, memberUser),
    ).rejects.toBeInstanceOf(ForbiddenException);
    expect(tx.task.update).not.toHaveBeenCalled();
  });

  it('allows assignee to update status', async () => {
    tx.task.findUnique.mockResolvedValue({
      status: task_status.pending,
      order_item_id: 77,
      assigned_to: 2,
    });
    tx.task.update.mockResolvedValue({
      id: 10,
      status: task_status.in_progress,
      order_item_id: 77,
      details: { orderItemId: 77 },
      hooks: null,
      assigned_user: { id: 2 },
      order_item: {
        id: 77,
        order: { id: 5 },
        product: { id: 1 },
        product_variant: { id: 2 },
      },
    });
    tx.order_item.update.mockResolvedValue({ order_id: 5 });
    tx.order_item.findMany.mockResolvedValue([{ status: 'in_progress' }]);

    await service.updateTaskStatus(10, task_status.in_progress, memberUser);

    expect(tx.task.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 10 },
        data: { status: task_status.in_progress },
      }),
    );
  });

  it('allows admin to update status regardless of assignee', async () => {
    tx.task.findUnique.mockResolvedValue({
      status: task_status.pending,
      order_item_id: 77,
      assigned_to: 99,
    });
    tx.task.update.mockResolvedValue({
      id: 10,
      status: task_status.completed,
      order_item_id: 77,
      details: { orderItemId: 77 },
      hooks: null,
      assigned_user: { id: 99 },
      order_item: {
        id: 77,
        order: { id: 5 },
        product: { id: 1 },
        product_variant: { id: 2 },
      },
    });
    tx.order_item.update.mockResolvedValue({ order_id: 5 });
    tx.order_item.findMany.mockResolvedValue([{ status: 'completed' }]);

    await service.updateTaskStatus(10, task_status.completed, adminUser);

    expect(tx.task.update).toHaveBeenCalled();
  });

  it('runs status update + order sync in one transaction and bubbles failures', async () => {
    tx.task.findUnique.mockResolvedValue({
      status: task_status.pending,
      order_item_id: 77,
      assigned_to: 2,
    });
    tx.task.update.mockResolvedValue({
      id: 10,
      status: task_status.completed,
      order_item_id: 77,
      details: { orderItemId: 77 },
      hooks: null,
      assigned_user: { id: 2 },
      order_item: {
        id: 77,
        order: { id: 5 },
        product: { id: 1 },
        product_variant: { id: 2 },
      },
    });
    tx.order_item.update.mockRejectedValue(new Error('order item sync failed'));

    await expect(
      service.updateTaskStatus(10, task_status.completed, memberUser),
    ).rejects.toThrow('order item sync failed');

    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    expect(tx.order.update).not.toHaveBeenCalled();
  });

  it('recomputes order status after hook-driven order_item updates', async () => {
    tx.task.findUnique.mockResolvedValue({
      status: task_status.pending,
      order_item_id: 77,
      assigned_to: 2,
    });
    tx.task.update.mockResolvedValue({
      id: 10,
      status: task_status.completed,
      order_item_id: 77,
      details: { orderItemId: 77 },
      hooks: [
        {
          trigger: { type: 'status', status: task_status.completed },
          action: { type: 'update_order_item_status', status: 'completed' },
        },
      ],
      assigned_user: { id: 2 },
      order_item: {
        id: 77,
        order: { id: 5 },
        product: { id: 1 },
        product_variant: { id: 2 },
      },
    });
    tx.order_item.update.mockResolvedValue({ order_id: 5 });
    tx.order_item.findMany.mockResolvedValue([{ status: 'completed' }]);
    tasksHooks.parseHooks.mockResolvedValue([5]);

    await service.updateTaskStatus(10, task_status.completed, memberUser);

    expect(tasksHooks.parseHooks).toHaveBeenCalledWith(expect.any(Object), tx);
    expect(tx.order.update).toHaveBeenCalledWith({
      where: { id: 5 },
      data: { status: 'completed' },
    });
  });

  it('rejects claim when task does not exist', async () => {
    tx.task.updateMany.mockResolvedValue({ count: 0 });
    tx.task.findUnique.mockResolvedValue(null);

    await expect(service.claimTask(999, 2)).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });
});
