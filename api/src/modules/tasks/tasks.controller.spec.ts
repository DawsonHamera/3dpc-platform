import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { ROLES_KEY } from '../../common/decorators/roles.decorator';
import { IS_PUBLIC_KEY } from '../../common/decorators/public.decorator';

describe('TasksController', () => {
  const tasksServiceMock: jest.Mocked<
    Pick<TasksService, 'findOpenTasks' | 'findTaskById'>
  > = {
    findOpenTasks: jest.fn(),
    findTaskById: jest.fn(),
  };

  let controller: TasksController;

  beforeEach(() => {
    jest.clearAllMocks();
    controller = new TasksController(tasksServiceMock as TasksService);
  });

  it('delegates open-task retrieval to service', async () => {
    const openTasks = [{ id: 1, title: 'Open task' }];
    tasksServiceMock.findOpenTasks.mockResolvedValue(openTasks);

    const result = await controller.findOpen();

    expect(tasksServiceMock.findOpenTasks).toHaveBeenCalledTimes(1);
    expect(result).toBe(openTasks);
  });

  it('requires authenticated member/admin roles for open and single task routes', () => {
    const findOpenRoles = Reflect.getMetadata(ROLES_KEY, controller.findOpen);
    const findOneRoles = Reflect.getMetadata(ROLES_KEY, controller.findOne);
    const findOpenPublic = Reflect.getMetadata(
      IS_PUBLIC_KEY,
      controller.findOpen,
    );
    const findOnePublic = Reflect.getMetadata(
      IS_PUBLIC_KEY,
      controller.findOne,
    );

    expect(findOpenRoles).toEqual(['member', 'admin']);
    expect(findOneRoles).toEqual(['member', 'admin']);
    expect(findOpenPublic).toBeUndefined();
    expect(findOnePublic).toBeUndefined();
  });
});
