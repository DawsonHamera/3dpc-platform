import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumsteps_step_typeNullableFilterObjectSchema as NestedEnumsteps_step_typeNullableFilterObjectSchema } from './NestedEnumsteps_step_typeNullableFilter.schema'

const nestedenumsteps_step_typenullablewithaggregatesfilterSchema = z.object({
  equals: steps_step_typeSchema.optional().nullable(),
  in: steps_step_typeSchema.array().optional().nullable(),
  notIn: steps_step_typeSchema.array().optional().nullable(),
  not: z.union([steps_step_typeSchema, z.lazy(() => NestedEnumsteps_step_typeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumsteps_step_typeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumsteps_step_typeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumsteps_step_typeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumsteps_step_typeNullableWithAggregatesFilter> = nestedenumsteps_step_typenullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumsteps_step_typeNullableWithAggregatesFilter>;
export const NestedEnumsteps_step_typeNullableWithAggregatesFilterObjectZodSchema = nestedenumsteps_step_typenullablewithaggregatesfilterSchema;
