import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesCreateNestedOneWithoutProcess_template_stepsInputObjectSchema as process_templatesCreateNestedOneWithoutProcess_template_stepsInputObjectSchema } from './process_templatesCreateNestedOneWithoutProcess_template_stepsInput.schema';
import { stepsCreateNestedOneWithoutProcess_template_stepsInputObjectSchema as stepsCreateNestedOneWithoutProcess_template_stepsInputObjectSchema } from './stepsCreateNestedOneWithoutProcess_template_stepsInput.schema'

const makeSchema = () => z.object({
  step_order: z.number().int(),
  is_required: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional(),
  updated_at: z.coerce.date().optional(),
  process_templates: z.lazy(() => process_templatesCreateNestedOneWithoutProcess_template_stepsInputObjectSchema),
  steps: z.lazy(() => stepsCreateNestedOneWithoutProcess_template_stepsInputObjectSchema)
}).strict();
export const process_template_stepsCreateInputObjectSchema: z.ZodType<Prisma.process_template_stepsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsCreateInput>;
export const process_template_stepsCreateInputObjectZodSchema = makeSchema();
