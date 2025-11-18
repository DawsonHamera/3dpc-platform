import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  amount: z.boolean().optional(),
  created_at: z.boolean().optional(),
  user_id: z.boolean().optional(),
  created_by: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional()
}).strict();
export const recycling_logSelectObjectSchema: z.ZodType<Prisma.recycling_logSelect> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logSelect>;
export const recycling_logSelectObjectZodSchema = makeSchema();
