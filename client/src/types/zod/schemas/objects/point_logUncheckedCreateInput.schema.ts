import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  change: z.number().int(),
  reason: z.string().max(255),
  details: z.string().optional().nullable(),
  logged_at: z.coerce.date().optional()
}).strict();
export const point_logUncheckedCreateInputObjectSchema: z.ZodType<Prisma.point_logUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logUncheckedCreateInput>;
export const point_logUncheckedCreateInputObjectZodSchema = makeSchema();
