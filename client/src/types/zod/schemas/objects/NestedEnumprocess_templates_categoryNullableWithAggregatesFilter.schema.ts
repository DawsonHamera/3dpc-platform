import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumprocess_templates_categoryNullableFilterObjectSchema as NestedEnumprocess_templates_categoryNullableFilterObjectSchema } from './NestedEnumprocess_templates_categoryNullableFilter.schema'

const nestedenumprocess_templates_categorynullablewithaggregatesfilterSchema = z.object({
  equals: process_templates_categorySchema.optional().nullable(),
  in: process_templates_categorySchema.array().optional().nullable(),
  notIn: process_templates_categorySchema.array().optional().nullable(),
  not: z.union([process_templates_categorySchema, z.lazy(() => NestedEnumprocess_templates_categoryNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumprocess_templates_categoryNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumprocess_templates_categoryNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumprocess_templates_categoryNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_templates_categoryNullableWithAggregatesFilter> = nestedenumprocess_templates_categorynullablewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_templates_categoryNullableWithAggregatesFilter>;
export const NestedEnumprocess_templates_categoryNullableWithAggregatesFilterObjectZodSchema = nestedenumprocess_templates_categorynullablewithaggregatesfilterSchema;
