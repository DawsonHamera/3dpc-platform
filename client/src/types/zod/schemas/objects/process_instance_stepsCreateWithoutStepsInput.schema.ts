import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_steps_statusSchema } from '../enums/process_instance_steps_status.schema';
import { process_instancesCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema as process_instancesCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema } from './process_instancesCreateNestedOneWithoutProcess_instance_stepsInput.schema';
import { usersCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema as usersCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema } from './usersCreateNestedOneWithoutProcess_instance_stepsInput.schema'

const makeSchema = () => z.object({
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
  notes: z.string().optional().nullable(),
  process_instances: z.lazy(() => process_instancesCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema),
  users: z.lazy(() => usersCreateNestedOneWithoutProcess_instance_stepsInputObjectSchema).optional()
}).strict();
export const process_instance_stepsCreateWithoutStepsInputObjectSchema: z.ZodType<Prisma.process_instance_stepsCreateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsCreateWithoutStepsInput>;
export const process_instance_stepsCreateWithoutStepsInputObjectZodSchema = makeSchema();
