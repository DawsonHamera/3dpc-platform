import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(255),
  description: z.string().optional().nullable(),
  process_template_id: z.number().int(),
  status: process_instances_statusSchema.optional(),
  priority: process_instances_prioritySchema.optional(),
  assigned_user_id: z.number().int().optional().nullable(),
  current_step_order: z.number().int().optional(),
  estimated_duration: z.number().int().optional().nullable(),
  actual_duration: z.number().int().optional().nullable(),
  started_at: z.coerce.date().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable(),
  due_date: z.coerce.date().optional().nullable(),
  metadata: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable()
}).strict();
export const process_instancesCreateManyInputObjectSchema: z.ZodType<Prisma.process_instancesCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateManyInput>;
export const process_instancesCreateManyInputObjectZodSchema = makeSchema();
