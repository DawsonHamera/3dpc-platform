import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { stepsCreateNestedOneWithoutProcess_template_stepsInputObjectSchema as stepsCreateNestedOneWithoutProcess_template_stepsInputObjectSchema } from './stepsCreateNestedOneWithoutProcess_template_stepsInput.schema'

const makeSchema = () => z.object({
  step_order: z.number().int(),
  is_required: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  steps: z.lazy(() => stepsCreateNestedOneWithoutProcess_template_stepsInputObjectSchema)
}).strict();
export const process_template_stepsCreateWithoutProcess_templatesInputObjectSchema: z.ZodType<Prisma.process_template_stepsCreateWithoutProcess_templatesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsCreateWithoutProcess_templatesInput>;
export const process_template_stepsCreateWithoutProcess_templatesInputObjectZodSchema = makeSchema();
