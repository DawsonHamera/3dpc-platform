import { task_status, task_type } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsISO8601,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsInt()
  assigned_to?: number | null;

  @IsOptional()
  @IsInt()
  order_item_id?: number | null;

  @IsOptional()
  @IsISO8601()
  scheduled_date?: string;

  @IsOptional()
  @IsEnum(task_type)
  type?: task_type;

  @IsOptional()
  @IsObject()
  details?: Record<string, unknown>;

  @IsOptional()
  @IsEnum(task_status)
  status?: task_status;

  @IsOptional()
  @IsObject()
  hooks?: Record<string, unknown>;

  @IsOptional()
  @IsBoolean()
  is_required?: boolean;

  @IsOptional()
  @IsBoolean()
  is_open?: boolean;
}
