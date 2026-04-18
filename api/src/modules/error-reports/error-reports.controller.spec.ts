import { IS_PUBLIC_KEY } from '../../common/decorators/public.decorator';
import { error_report_type } from '@prisma/client';
import { ROLES_KEY } from '../../common/decorators/roles.decorator';
import { ErrorReportsController } from './error-reports.controller';
import { ErrorReportsService } from './error-reports.service';

describe('ErrorReportsController', () => {
  const errorReportsServiceMock: jest.Mocked<
    Pick<ErrorReportsService, 'create'>
  > = {
    create: jest.fn(),
  };

  let controller: ErrorReportsController;

  beforeEach(() => {
    jest.clearAllMocks();
    controller = new ErrorReportsController(
      errorReportsServiceMock as ErrorReportsService,
    );
  });

  it('creates an error report for the authenticated user', async () => {
    errorReportsServiceMock.create.mockResolvedValue({
      id: 11,
      user_id: 4,
      description: 'Unable to update task status',
      type: 'task_issue',
      status: 'open',
    });

    const result = await controller.create(
      { id: '4' },
      {
        description: 'Unable to update task status',
        type: error_report_type.task_issue,
      },
    );

    expect(errorReportsServiceMock.create).toHaveBeenCalledWith(4, {
      description: 'Unable to update task status',
      type: error_report_type.task_issue,
    });
    expect(result).toEqual(expect.objectContaining({ user_id: 4 }));
  });

  it('is not marked as public', () => {
    const createPublic = Reflect.getMetadata(IS_PUBLIC_KEY, controller.create);
    const createRoles = Reflect.getMetadata(ROLES_KEY, controller.create);
    expect(createPublic).toBeUndefined();
    expect(createRoles).toEqual(['member', 'admin']);
  });
});
