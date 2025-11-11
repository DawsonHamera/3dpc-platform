import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_steps_statusSchema } from '../enums/process_instance_steps_status.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  process_instance_id: z.number().int(),
  step_id: z.number().int(),
  step_order: z.number().int(),
  status: process_instance_steps_statusSchema.optional(),
  started_at: z.coerce.date().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable(),
  is_required: z.boolean().optional(),
  input_data: z.string().optional().nullable(),
  output_data: z.string().optional().nullable(),
  metadata: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  notes: z.string().optional().nullable()
}).strict();
export const process_instance_stepsCreateManyUsersInputObjectSchema: z.ZodType<Prisma.process_instance_stepsCreateManyUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsCreateManyUsersInput>;
export const process_instance_stepsCreateManyUsersInputObjectZodSchema = makeSchema();
