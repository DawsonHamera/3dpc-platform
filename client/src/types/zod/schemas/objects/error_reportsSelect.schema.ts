import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema';
import { tasksArgsObjectSchema as tasksArgsObjectSchema } from './tasksArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  task_id: z.boolean().optional(),
  submitted_by: z.boolean().optional(),
  step_id: z.boolean().optional(),
  description: z.boolean().optional(),
  image_url: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional(),
  tasks: z.union([z.boolean(), z.lazy(() => tasksArgsObjectSchema)]).optional()
}).strict();
export const error_reportsSelectObjectSchema: z.ZodType<Prisma.error_reportsSelect> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsSelect>;
export const error_reportsSelectObjectZodSchema = makeSchema();
