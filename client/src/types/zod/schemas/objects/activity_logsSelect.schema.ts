import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  action_type: z.boolean().optional(),
  table_name: z.boolean().optional(),
  record_id: z.boolean().optional(),
  result: z.boolean().optional(),
  details: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const activity_logsSelectObjectSchema: z.ZodType<Prisma.activity_logsSelect> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsSelect>;
export const activity_logsSelectObjectZodSchema = makeSchema();
