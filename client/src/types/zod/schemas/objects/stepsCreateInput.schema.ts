import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema';
import { error_reportsCreateNestedManyWithoutStepsInputObjectSchema as error_reportsCreateNestedManyWithoutStepsInputObjectSchema } from './error_reportsCreateNestedManyWithoutStepsInput.schema';
import { process_instance_stepsCreateNestedManyWithoutStepsInputObjectSchema as process_instance_stepsCreateNestedManyWithoutStepsInputObjectSchema } from './process_instance_stepsCreateNestedManyWithoutStepsInput.schema';
import { process_template_stepsCreateNestedManyWithoutStepsInputObjectSchema as process_template_stepsCreateNestedManyWithoutStepsInputObjectSchema } from './process_template_stepsCreateNestedManyWithoutStepsInput.schema';
import { step_actionsCreateNestedManyWithoutStepsInputObjectSchema as step_actionsCreateNestedManyWithoutStepsInputObjectSchema } from './step_actionsCreateNestedManyWithoutStepsInput.schema';
import { step_contentCreateNestedManyWithoutStepsInputObjectSchema as step_contentCreateNestedManyWithoutStepsInputObjectSchema } from './step_contentCreateNestedManyWithoutStepsInput.schema'

const makeSchema = () => z.object({
  title: z.string().max(255),
  description: z.string().optional().nullable(),
  is_critical: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  step_type: steps_step_typeSchema.optional().nullable(),
  is_required: z.boolean().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  error_reports: z.lazy(() => error_reportsCreateNestedManyWithoutStepsInputObjectSchema),
  process_instance_steps: z.lazy(() => process_instance_stepsCreateNestedManyWithoutStepsInputObjectSchema),
  process_template_steps: z.lazy(() => process_template_stepsCreateNestedManyWithoutStepsInputObjectSchema),
  step_actions: z.lazy(() => step_actionsCreateNestedManyWithoutStepsInputObjectSchema),
  step_content: z.lazy(() => step_contentCreateNestedManyWithoutStepsInputObjectSchema)
}).strict();
export const stepsCreateInputObjectSchema: z.ZodType<Prisma.stepsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsCreateInput>;
export const stepsCreateInputObjectZodSchema = makeSchema();
