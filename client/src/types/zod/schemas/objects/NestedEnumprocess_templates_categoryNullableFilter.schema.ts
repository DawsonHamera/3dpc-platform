import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema'

const nestedenumprocess_templates_categorynullablefilterSchema = z.object({
  equals: process_templates_categorySchema.optional().nullable(),
  in: process_templates_categorySchema.array().optional().nullable(),
  notIn: process_templates_categorySchema.array().optional().nullable(),
  not: z.union([process_templates_categorySchema, z.lazy(() => NestedEnumprocess_templates_categoryNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumprocess_templates_categoryNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_templates_categoryNullableFilter> = nestedenumprocess_templates_categorynullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_templates_categoryNullableFilter>;
export const NestedEnumprocess_templates_categoryNullableFilterObjectZodSchema = nestedenumprocess_templates_categorynullablefilterSchema;
