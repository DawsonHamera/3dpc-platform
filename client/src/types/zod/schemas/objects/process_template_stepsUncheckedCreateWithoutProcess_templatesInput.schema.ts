import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  step_id: z.number().int(),
  step_order: z.number().int(),
  is_required: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional()
}).strict();
export const process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_template_stepsUncheckedCreateWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsUncheckedCreateWithoutProcess_templatesInput>;
export const process_template_stepsUncheckedCreateWithoutProcess_templatesInputObjectZodSchema = makeSchema();
