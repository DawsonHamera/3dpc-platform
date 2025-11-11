import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesArgsObjectSchema as process_instancesArgsObjectSchema } from './process_instancesArgs.schema';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  process_instance_id: z.boolean().optional(),
  step_id: z.boolean().optional(),
  step_order: z.boolean().optional(),
  status: z.boolean().optional(),
  started_at: z.boolean().optional(),
  completed_at: z.boolean().optional(),
  assigned_user_id: z.boolean().optional(),
  is_required: z.boolean().optional(),
  input_data: z.boolean().optional(),
  output_data: z.boolean().optional(),
  metadata: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  due_date: z.boolean().optional(),
  notes: z.boolean().optional(),
  process_instances: z.union([z.boolean(), z.lazy(() => process_instancesArgsObjectSchema)]).optional(),
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const process_instance_stepsSelectObjectSchema: z.ZodType<Prisma.process_instance_stepsSelect> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsSelect>;
export const process_instance_stepsSelectObjectZodSchema = makeSchema();
