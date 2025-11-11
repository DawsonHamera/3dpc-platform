import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_content_content_typeSchema } from '../enums/step_content_content_type.schema';
import { NestedEnumstep_content_content_typeWithAggregatesFilterObjectSchema as NestedEnumstep_content_content_typeWithAggregatesFilterObjectSchema } from './NestedEnumstep_content_content_typeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumstep_content_content_typeFilterObjectSchema as NestedEnumstep_content_content_typeFilterObjectSchema } from './NestedEnumstep_content_content_typeFilter.schema'

const makeSchema = () => z.object({
  equals: step_content_content_typeSchema.optional(),
  in: step_content_content_typeSchema.array().optional(),
  notIn: step_content_content_typeSchema.array().optional(),
  not: z.union([step_content_content_typeSchema, z.lazy(() => NestedEnumstep_content_content_typeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumstep_content_content_typeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumstep_content_content_typeFilterObjectSchema).optional()
}).strict();
export const Enumstep_content_content_typeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumstep_content_content_typeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumstep_content_content_typeWithAggregatesFilter>;
export const Enumstep_content_content_typeWithAggregatesFilterObjectZodSchema = makeSchema();
