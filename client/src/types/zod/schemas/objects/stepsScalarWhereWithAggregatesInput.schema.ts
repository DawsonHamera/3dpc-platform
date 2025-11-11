import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { Enumsteps_step_typeNullableWithAggregatesFilterObjectSchema as Enumsteps_step_typeNullableWithAggregatesFilterObjectSchema } from './Enumsteps_step_typeNullableWithAggregatesFilter.schema';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema'

const stepsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => stepsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => stepsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => stepsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => stepsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => stepsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  is_critical: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  step_type: z.union([z.lazy(() => Enumsteps_step_typeNullableWithAggregatesFilterObjectSchema), steps_step_typeSchema]).optional().nullable(),
  is_required: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const stepsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.stepsScalarWhereWithAggregatesInput> = stepsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.stepsScalarWhereWithAggregatesInput>;
export const stepsScalarWhereWithAggregatesInputObjectZodSchema = stepsscalarwherewithaggregatesinputSchema;
