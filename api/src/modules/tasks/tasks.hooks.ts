import { PrismaService } from 'src/prisma/prisma.service';

export class TasksHooks {
  constructor(private readonly prisma: PrismaService) {}

  parseHooks(task: any): any {
    task.hooks?.forEach((hook) => {
      switch (hook.trigger.type) {
        case 'status':
          if (hook.trigger.status !== task.status) {
            return;
          }
          break;

        default:
          return;
      }

      if (hook.condition) {
        switch (hook.condition.type) {
          case 'order_full':
            break;
          default:
            return;
        }
      }

      switch (hook.action.type) {
        case 'update_order_item_status':
          if (task.details?.orderItemId)
            this.prisma.order_item.update({
              where: { id: task.details.orderItemId },
              data: { status: hook.action.status },
            });
          break;
        default:
          return;
      }
    });

    return {};
  }
}
