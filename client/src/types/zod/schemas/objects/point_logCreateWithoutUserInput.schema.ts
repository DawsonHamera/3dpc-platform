import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  change: z.number().int(),
  reason: z.string().max(255),
  details: z.string().optional().nullable(),
  logged_at: z.coerce.date().optional()
}).strict();
export const point_logCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.point_logCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logCreateWithoutUserInput>;
export const point_logCreateWithoutUserInputObjectZodSchema = makeSchema();
