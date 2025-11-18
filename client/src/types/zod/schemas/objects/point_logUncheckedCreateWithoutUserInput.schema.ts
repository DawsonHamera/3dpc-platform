import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  change: z.number().int(),
  reason: z.string(),
  details: z.string().optional().nullable(),
  logged_at: z.coerce.date().optional()
}).strict();
export const point_logUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.point_logUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logUncheckedCreateWithoutUserInput>;
export const point_logUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
