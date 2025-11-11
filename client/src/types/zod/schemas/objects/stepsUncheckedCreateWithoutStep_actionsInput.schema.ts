import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema';
import { error_reportsUncheckedCreateNestedManyWithoutStepsInputObjectSchema as error_reportsUncheckedCreateNestedManyWithoutStepsInputObjectSchema } from './error_reportsUncheckedCreateNestedManyWithoutStepsInput.schema';
import { process_instance_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema as process_instance_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema } from './process_instance_stepsUncheckedCreateNestedManyWithoutStepsInput.schema';
import { process_template_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema as process_template_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema } from './process_template_stepsUncheckedCreateNestedManyWithoutStepsInput.schema';
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
  process_instance_steps: z.lazy(() => process_instance_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema).optional(),
  process_template_steps: z.lazy(() => process_template_stepsUncheckedCreateNestedManyWithoutStepsInputObjectSchema).optional(),
  step_content: z.lazy(() => step_contentUncheckedCreateNestedManyWithoutStepsInputObjectSchema).optional()
}).strict();
export const stepsUncheckedCreateWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.stepsUncheckedCreateWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsUncheckedCreateWithoutStep_actionsInput>;
export const stepsUncheckedCreateWithoutStep_actionsInputObjectZodSchema = makeSchema();
