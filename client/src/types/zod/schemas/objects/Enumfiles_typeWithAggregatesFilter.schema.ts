import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { files_typeSchema } from '../enums/files_type.schema';
import { NestedEnumfiles_typeWithAggregatesFilterObjectSchema as NestedEnumfiles_typeWithAggregatesFilterObjectSchema } from './NestedEnumfiles_typeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumfiles_typeFilterObjectSchema as NestedEnumfiles_typeFilterObjectSchema } from './NestedEnumfiles_typeFilter.schema'

const makeSchema = () => z.object({
  equals: files_typeSchema.optional(),
  in: files_typeSchema.array().optional(),
  notIn: files_typeSchema.array().optional(),
  not: z.union([files_typeSchema, z.lazy(() => NestedEnumfiles_typeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumfiles_typeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumfiles_typeFilterObjectSchema).optional()
}).strict();
export const Enumfiles_typeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumfiles_typeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumfiles_typeWithAggregatesFilter>;
export const Enumfiles_typeWithAggregatesFilterObjectZodSchema = makeSchema();
