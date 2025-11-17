import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { file_typeSchema } from '../enums/file_type.schema';
import { NestedEnumfile_typeWithAggregatesFilterObjectSchema as NestedEnumfile_typeWithAggregatesFilterObjectSchema } from './NestedEnumfile_typeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumfile_typeFilterObjectSchema as NestedEnumfile_typeFilterObjectSchema } from './NestedEnumfile_typeFilter.schema'

const makeSchema = () => z.object({
  equals: file_typeSchema.optional(),
  in: file_typeSchema.array().optional(),
  notIn: file_typeSchema.array().optional(),
  not: z.union([file_typeSchema, z.lazy(() => NestedEnumfile_typeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumfile_typeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumfile_typeFilterObjectSchema).optional()
}).strict();
export const Enumfile_typeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumfile_typeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumfile_typeWithAggregatesFilter>;
export const Enumfile_typeWithAggregatesFilterObjectZodSchema = makeSchema();
