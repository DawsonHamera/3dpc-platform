import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  process_template_id: z.number().int(),
  step_id: z.number().int(),
  step_order: z.number().int(),
  is_required: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const process_template_stepsCreateManyInputObjectSchema: z.ZodType<Prisma.process_template_stepsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsCreateManyInput>;
export const process_template_stepsCreateManyInputObjectZodSchema = makeSchema();
