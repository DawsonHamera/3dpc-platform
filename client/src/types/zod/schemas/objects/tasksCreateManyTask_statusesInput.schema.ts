import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  request_id: z.number().int(),
  model_id: z.number().int(),
  printer_id: z.number().int().optional().nullable(),
  material_slots: z.string(),
  quality: z.string().max(100).optional().nullable(),
  quantity: z.number().int().optional(),
  assigned_user_id: z.number().int().optional().nullable(),
  comments: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  scheduled_start_time: z.coerce.date().optional().nullable(),
  scheduled_end_time: z.coerce.date().optional().nullable(),
  process_instance_id: z.number().int().optional().nullable()
}).strict();
export const tasksCreateManyTask_statusesInputObjectSchema: z.ZodType<Prisma.tasksCreateManyTask_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateManyTask_statusesInput>;
export const tasksCreateManyTask_statusesInputObjectZodSchema = makeSchema();
