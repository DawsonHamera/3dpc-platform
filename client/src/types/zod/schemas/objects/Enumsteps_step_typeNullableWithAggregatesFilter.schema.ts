import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema';
import { NestedEnumsteps_step_typeNullableWithAggregatesFilterObjectSchema as NestedEnumsteps_step_typeNullableWithAggregatesFilterObjectSchema } from './NestedEnumsteps_step_typeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumsteps_step_typeNullableFilterObjectSchema as NestedEnumsteps_step_typeNullableFilterObjectSchema } from './NestedEnumsteps_step_typeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: steps_step_typeSchema.optional().nullable(),
  in: steps_step_typeSchema.array().optional().nullable(),
  notIn: steps_step_typeSchema.array().optional().nullable(),
  not: z.union([steps_step_typeSchema, z.lazy(() => NestedEnumsteps_step_typeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumsteps_step_typeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumsteps_step_typeNullableFilterObjectSchema).optional()
}).strict();
export const Enumsteps_step_typeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumsteps_step_typeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumsteps_step_typeNullableWithAggregatesFilter>;
export const Enumsteps_step_typeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
