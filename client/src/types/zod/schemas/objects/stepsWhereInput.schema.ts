import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Enumsteps_step_typeNullableFilterObjectSchema as Enumsteps_step_typeNullableFilterObjectSchema } from './Enumsteps_step_typeNullableFilter.schema';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema';
import { Error_reportsListRelationFilterObjectSchema as Error_reportsListRelationFilterObjectSchema } from './Error_reportsListRelationFilter.schema';
import { Process_instance_stepsListRelationFilterObjectSchema as Process_instance_stepsListRelationFilterObjectSchema } from './Process_instance_stepsListRelationFilter.schema';
import { Process_template_stepsListRelationFilterObjectSchema as Process_template_stepsListRelationFilterObjectSchema } from './Process_template_stepsListRelationFilter.schema';
import { Step_actionsListRelationFilterObjectSchema as Step_actionsListRelationFilterObjectSchema } from './Step_actionsListRelationFilter.schema';
import { Step_contentListRelationFilterObjectSchema as Step_contentListRelationFilterObjectSchema } from './Step_contentListRelationFilter.schema'

const stepswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => stepsWhereInputObjectSchema), z.lazy(() => stepsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => stepsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => stepsWhereInputObjectSchema), z.lazy(() => stepsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  is_critical: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  step_type: z.union([z.lazy(() => Enumsteps_step_typeNullableFilterObjectSchema), steps_step_typeSchema]).optional().nullable(),
  is_required: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  error_reports: z.lazy(() => Error_reportsListRelationFilterObjectSchema).optional(),
  process_instance_steps: z.lazy(() => Process_instance_stepsListRelationFilterObjectSchema).optional(),
  process_template_steps: z.lazy(() => Process_template_stepsListRelationFilterObjectSchema).optional(),
  step_actions: z.lazy(() => Step_actionsListRelationFilterObjectSchema).optional(),
  step_content: z.lazy(() => Step_contentListRelationFilterObjectSchema).optional()
}).strict();
export const stepsWhereInputObjectSchema: z.ZodType<Prisma.stepsWhereInput> = stepswhereinputSchema as unknown as z.ZodType<Prisma.stepsWhereInput>;
export const stepsWhereInputObjectZodSchema = stepswhereinputSchema;
