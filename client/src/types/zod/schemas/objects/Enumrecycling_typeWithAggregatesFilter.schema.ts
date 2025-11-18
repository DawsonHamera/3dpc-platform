import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { NestedEnumrecycling_typeWithAggregatesFilterObjectSchema as NestedEnumrecycling_typeWithAggregatesFilterObjectSchema } from './NestedEnumrecycling_typeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumrecycling_typeFilterObjectSchema as NestedEnumrecycling_typeFilterObjectSchema } from './NestedEnumrecycling_typeFilter.schema'

const makeSchema = () => z.object({
  equals: recycling_typeSchema.optional(),
  in: recycling_typeSchema.array().optional(),
  notIn: recycling_typeSchema.array().optional(),
  not: z.union([recycling_typeSchema, z.lazy(() => NestedEnumrecycling_typeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumrecycling_typeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumrecycling_typeFilterObjectSchema).optional()
}).strict();
export const Enumrecycling_typeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumrecycling_typeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumrecycling_typeWithAggregatesFilter>;
export const Enumrecycling_typeWithAggregatesFilterObjectZodSchema = makeSchema();
