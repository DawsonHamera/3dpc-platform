import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesArgsObjectSchema as process_instancesArgsObjectSchema } from './process_instancesArgs.schema';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  process_instance_id: z.boolean().optional(),
  step_order: z.boolean().optional(),
  level: z.boolean().optional(),
  action: z.boolean().optional(),
  message: z.boolean().optional(),
  data: z.boolean().optional(),
  user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  deleted_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  process_instances: z.union([z.boolean(), z.lazy(() => process_instancesArgsObjectSchema)]).optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const process_logsSelectObjectSchema: z.ZodType<Prisma.process_logsSelect> = makeSchema() as unknown as z.ZodType<Prisma.process_logsSelect>;
export const process_logsSelectObjectZodSchema = makeSchema();
