import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  action_type: z.boolean().optional(),
  table_name: z.boolean().optional(),
  record_id: z.boolean().optional(),
  result: z.boolean().optional(),
  details: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional()
}).strict();
export const activity_logSelectObjectSchema: z.ZodType<Prisma.activity_logSelect> = makeSchema() as unknown as z.ZodType<Prisma.activity_logSelect>;
export const activity_logSelectObjectZodSchema = makeSchema();
