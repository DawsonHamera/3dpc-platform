import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  submitted_by: z.number().int(),
  step_id: z.number().int().optional().nullable(),
  description: z.string().optional().nullable(),
  image_url: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const error_reportsUncheckedCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.error_reportsUncheckedCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUncheckedCreateWithoutTasksInput>;
export const error_reportsUncheckedCreateWithoutTasksInputObjectZodSchema = makeSchema();
