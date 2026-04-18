import { error_report_type } from '@prisma/client';
import { ErrorReportsService } from './error-reports.service';

describe('ErrorReportsService', () => {
  const create = jest.fn();
  const prisma = {
    error_report: {
      create,
    },
  };

  let service: ErrorReportsService;

  beforeEach(() => {
    jest.clearAllMocks();
    service = new ErrorReportsService(prisma as never);
  });

  it('creates an error report for the authenticated user', async () => {
    create.mockResolvedValue({
      id: 1,
      user_id: 2,
      description: 'Task detail panel fails to load',
      type: error_report_type.bug,
      status: 'open',
    });

    const payload = {
      description: 'Task detail panel fails to load',
      type: error_report_type.bug,
    };
    const result = await service.create(2, payload);

    expect(create).toHaveBeenCalledWith({
      data: {
        user_id: 2,
        description: payload.description,
        type: payload.type,
      },
    });
    expect(result).toEqual(
      expect.objectContaining({
        user_id: 2,
        type: error_report_type.bug,
      }),
    );
  });
});
