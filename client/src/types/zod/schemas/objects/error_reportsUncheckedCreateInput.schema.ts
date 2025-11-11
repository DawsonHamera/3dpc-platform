import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  task_id: z.number().int(),
  submitted_by: z.number().int(),
  step_id: z.number().int().optional().nullable(),
  description: z.string().optional().nullable(),
  image_url: z.string().max(255).optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable()
}).strict();
export const error_reportsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.error_reportsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUncheckedCreateInput>;
export const error_reportsUncheckedCreateInputObjectZodSchema = makeSchema();
