import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  request_id: z.literal(true).optional(),
  model_id: z.literal(true).optional(),
  printer_id: z.literal(true).optional(),
  material_slots: z.literal(true).optional(),
  quality: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  status_id: z.literal(true).optional(),
  assigned_user_id: z.literal(true).optional(),
  comments: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  scheduled_start_time: z.literal(true).optional(),
  scheduled_end_time: z.literal(true).optional(),
  process_instance_id: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TasksCountAggregateInputObjectSchema: z.ZodType<Prisma.TasksCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TasksCountAggregateInputType>;
export const TasksCountAggregateInputObjectZodSchema = makeSchema();
