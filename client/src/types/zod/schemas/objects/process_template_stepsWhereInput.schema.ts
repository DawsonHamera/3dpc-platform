import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { Process_templatesScalarRelationFilterObjectSchema as Process_templatesScalarRelationFilterObjectSchema } from './Process_templatesScalarRelationFilter.schema';
import { process_templatesWhereInputObjectSchema as process_templatesWhereInputObjectSchema } from './process_templatesWhereInput.schema';
import { StepsScalarRelationFilterObjectSchema as StepsScalarRelationFilterObjectSchema } from './StepsScalarRelationFilter.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema'

const process_template_stepswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => process_template_stepsWhereInputObjectSchema), z.lazy(() => process_template_stepsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_template_stepsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_template_stepsWhereInputObjectSchema), z.lazy(() => process_template_stepsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  process_template_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  is_required: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  process_templates: z.union([z.lazy(() => Process_templatesScalarRelationFilterObjectSchema), z.lazy(() => process_templatesWhereInputObjectSchema)]).optional(),
  steps: z.union([z.lazy(() => StepsScalarRelationFilterObjectSchema), z.lazy(() => stepsWhereInputObjectSchema)]).optional()
}).strict();
export const process_template_stepsWhereInputObjectSchema: z.ZodType<Prisma.process_template_stepsWhereInput> = process_template_stepswhereinputSchema as unknown as z.ZodType<Prisma.process_template_stepsWhereInput>;
export const process_template_stepsWhereInputObjectZodSchema = process_template_stepswhereinputSchema;
