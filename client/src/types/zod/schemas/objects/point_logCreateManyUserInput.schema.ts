import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  change: z.number().int(),
  reason: z.string().max(255),
  details: z.string().optional().nullable(),
  logged_at: z.coerce.date().optional()
}).strict();
export const point_logCreateManyUserInputObjectSchema: z.ZodType<Prisma.point_logCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logCreateManyUserInput>;
export const point_logCreateManyUserInputObjectZodSchema = makeSchema();
