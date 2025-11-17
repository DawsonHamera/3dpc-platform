import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { file_typeSchema } from '../enums/file_type.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumfile_typeFilterObjectSchema as NestedEnumfile_typeFilterObjectSchema } from './NestedEnumfile_typeFilter.schema'

const nestedenumfile_typewithaggregatesfilterSchema = z.object({
  equals: file_typeSchema.optional(),
  in: file_typeSchema.array().optional(),
  notIn: file_typeSchema.array().optional(),
  not: z.union([file_typeSchema, z.lazy(() => NestedEnumfile_typeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumfile_typeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumfile_typeFilterObjectSchema).optional()
}).strict();
export const NestedEnumfile_typeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumfile_typeWithAggregatesFilter> = nestedenumfile_typewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumfile_typeWithAggregatesFilter>;
export const NestedEnumfile_typeWithAggregatesFilterObjectZodSchema = nestedenumfile_typewithaggregatesfilterSchema;
