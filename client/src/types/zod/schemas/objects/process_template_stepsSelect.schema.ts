import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templatesArgsObjectSchema as process_templatesArgsObjectSchema } from './process_templatesArgs.schema';
import { stepsArgsObjectSchema as stepsArgsObjectSchema } from './stepsArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  process_template_id: z.boolean().optional(),
  step_id: z.boolean().optional(),
  step_order: z.boolean().optional(),
  is_required: z.boolean().optional(),
  created_at: z.boolean().optional(),
  updated_at: z.boolean().optional(),
  process_templates: z.union([z.boolean(), z.lazy(() => process_templatesArgsObjectSchema)]).optional(),
  steps: z.union([z.boolean(), z.lazy(() => stepsArgsObjectSchema)]).optional()
}).strict();
export const process_template_stepsSelectObjectSchema: z.ZodType<Prisma.process_template_stepsSelect> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsSelect>;
export const process_template_stepsSelectObjectZodSchema = makeSchema();
