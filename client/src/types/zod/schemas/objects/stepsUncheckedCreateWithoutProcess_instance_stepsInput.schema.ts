import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema';
import { error_reportsUncheckedCreateNestedManyWithoutStepsInputObjectSchema as error_reportsUncheckedCreateNestedManyWithoutStepsInputObjectSchema } from './error_reportsUncheckedCreateNestedManyWithoutStepsInput.schema';
import { process_template_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema as process_template_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedCreateNestedManyWithoutStepsInput.schema';
import { step_actionsUncheckedCreateNestedManyWithoutStepsInputObjectSchema as step_actionsUncheckedCreateNestedManyWithoutStepsInputObjectSchema } from './step_actionsUncheckedCreateNestedManyWithoutStepsInput.schema';
import { step_contentUncheckedCreateNestedManyWithoutStepsInputObjectSchema as step_contentUncheckedCreateNestedManyWithoutStepsInputObjectSchema } from './step_contentUncheckedCreateNestedManyWithoutStepsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  is_critical: z.boolean().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  step_type: steps_step_typeSchema.optional().nullable(),
  is_required: z.boolean().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  error_reports: z.lazy(() => error_reportsUncheckedCreateNestedManyWithoutStepsInputObjectSchema).optional(),
  process_template_steps: z.lazy(() => process_template_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema).optional(),
  step_actions: z.lazy(() => step_actionsUncheckedCreateNestedManyWithoutStepsInputObjectSchema).optional(),
  step_content: z.lazy(() => step_contentUncheckedCreateNestedManyWithoutStepsInputObjectSchema).optional()
}).strict();
export const stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectSchema: z.ZodType<Prisma.stepsUncheckedCreateWithoutProcess_instance_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUncheckedCreateWithoutProcess_instance_stepsInput>;
export const stepsUncheckedCreateWithoutProcess_instance_stepsInputObjectZodSchema = makeSchema();
