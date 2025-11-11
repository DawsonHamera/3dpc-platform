import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  task_id: z.number().int(),
  submitted_by: z.number().int(),
  description: z.string().optional().nullable(),
  image_url: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const error_reportsUncheckedCreateWithoutStepsInputObjectSchema: z.ZodType<Prisma.error_reportsUncheckedCreateWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUncheckedCreateWithoutStepsInput>;
export const error_reportsUncheckedCreateWithoutStepsInputObjectZodSchema = makeSchema();
