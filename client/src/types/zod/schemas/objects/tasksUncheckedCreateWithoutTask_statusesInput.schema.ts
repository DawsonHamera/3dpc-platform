import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsUncheckedCreateNestedManyWithoutTasksInputObjectSchema as error_reportsUncheckedCreateNestedManyWithoutTasksInputObjectSchema } from './error_reportsUncheckedCreateNestedManyWithoutTasksInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  request_id: z.number().int(),
  model_id: z.number().int(),
  printer_id: z.number().int().optional().nullable(),
  material_slots: z.string(),
  quality: z.string().optional().nullable(),
  quantity: z.number().int().optional(),
  assigned_user_id: z.number().int().optional().nullable(),
  comments: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  scheduled_start_time: z.coerce.date().optional().nullable(),
  scheduled_end_time: z.coerce.date().optional().nullable(),
  process_instance_id: z.number().int().optional().nullable(),
  error_reports: z.lazy(() => error_reportsUncheckedCreateNestedManyWithoutTasksInputObjectSchema).optional()
}).strict();
export const tasksUncheckedCreateWithoutTask_statusesInputObjectSchema: z.ZodType<Prisma.tasksUncheckedCreateWithoutTask_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUncheckedCreateWithoutTask_statusesInput>;
export const tasksUncheckedCreateWithoutTask_statusesInputObjectZodSchema = makeSchema();
