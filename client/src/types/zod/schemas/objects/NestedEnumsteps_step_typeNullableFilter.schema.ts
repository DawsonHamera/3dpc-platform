import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema'

const nestedenumsteps_step_typenullablefilterSchema = z.object({
  equals: steps_step_typeSchema.optional().nullable(),
  in: steps_step_typeSchema.array().optional().nullable(),
  notIn: steps_step_typeSchema.array().optional().nullable(),
  not: z.union([steps_step_typeSchema, z.lazy(() => NestedEnumsteps_step_typeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumsteps_step_typeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumsteps_step_typeNullableFilter> = nestedenumsteps_step_typenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumsteps_step_typeNullableFilter>;
export const NestedEnumsteps_step_typeNullableFilterObjectZodSchema = nestedenumsteps_step_typenullablefilterSchema;
