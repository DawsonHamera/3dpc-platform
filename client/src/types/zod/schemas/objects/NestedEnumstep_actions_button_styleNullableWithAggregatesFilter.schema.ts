import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumstep_actions_button_styleNullableFilterObjectSchema as NestedEnumstep_actions_button_styleNullableFilterObjectSchema } from './NestedEnumstep_actions_button_styleNullableFilter.schema'

const nestedenumstep_actions_button_stylenullablewithaggregatesfilterSchema = z.object({
  equals: step_actions_button_styleSchema.optional().nullable(),
  in: step_actions_button_styleSchema.array().optional().nullable(),
  notIn: step_actions_button_styleSchema.array().optional().nullable(),
  not: z.union([step_actions_button_styleSchema, z.lazy(() => NestedEnumstep_actions_button_styleNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumstep_actions_button_styleNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumstep_actions_button_styleNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumstep_actions_button_styleNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumstep_actions_button_styleNullableWithAggregatesFilter> = nestedenumstep_actions_button_stylenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumstep_actions_button_styleNullableWithAggregatesFilter>;
export const NestedEnumstep_actions_button_styleNullableWithAggregatesFilterObjectZodSchema = nestedenumstep_actions_button_stylenullablewithaggregatesfilterSchema;
