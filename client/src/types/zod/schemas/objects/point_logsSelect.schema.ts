import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsObjectSchema as usersArgsObjectSchema } from './usersArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  change: z.boolean().optional(),
  reason: z.boolean().optional(),
  details: z.boolean().optional(),
  logged_at: z.boolean().optional(),
  users: z.union([z.boolean(), z.lazy(() => usersArgsObjectSchema)]).optional()
}).strict();
export const point_logsSelectObjectSchema: z.ZodType<Prisma.point_logsSelect> = makeSchema() as unknown as z.ZodType<Prisma.point_logsSelect>;
export const point_logsSelectObjectZodSchema = makeSchema();
