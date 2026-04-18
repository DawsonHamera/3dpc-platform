import { task_status } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class UpdateTaskStatusDto {
  @IsEnum(task_status)
  status: task_status;
}
