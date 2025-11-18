import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userArgsObjectSchema as userArgsObjectSchema } from './userArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  change: z.boolean().optional(),
  reason: z.boolean().optional(),
  details: z.boolean().optional(),
  logged_at: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => userArgsObjectSchema)]).optional()
}).strict();
export const point_logSelectObjectSchema: z.ZodType<Prisma.point_logSelect> = makeSchema() as unknown as z.ZodType<Prisma.point_logSelect>;
export const point_logSelectObjectZodSchema = makeSchema();
