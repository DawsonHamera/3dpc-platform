import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  change: z.number().int(),
  reason: z.string().max(255),
  details: z.string().optional().nullable(),
  logged_at: z.coerce.date().optional()
}).strict();
export const point_logsCreateManyUsersInputObjectSchema: z.ZodType<Prisma.point_logsCreateManyUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsCreateManyUsersInput>;
export const point_logsCreateManyUsersInputObjectZodSchema = makeSchema();
