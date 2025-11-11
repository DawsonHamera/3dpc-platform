import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { files_typeSchema } from '../enums/files_type.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumfiles_typeFilterObjectSchema as NestedEnumfiles_typeFilterObjectSchema } from './NestedEnumfiles_typeFilter.schema'

const nestedenumfiles_typewithaggregatesfilterSchema = z.object({
  equals: files_typeSchema.optional(),
  in: files_typeSchema.array().optional(),
  notIn: files_typeSchema.array().optional(),
  not: z.union([files_typeSchema, z.lazy(() => NestedEnumfiles_typeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumfiles_typeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumfiles_typeFilterObjectSchema).optional()
}).strict();
export const NestedEnumfiles_typeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumfiles_typeWithAggregatesFilter> = nestedenumfiles_typewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumfiles_typeWithAggregatesFilter>;
export const NestedEnumfiles_typeWithAggregatesFilterObjectZodSchema = nestedenumfiles_typewithaggregatesfilterSchema;
