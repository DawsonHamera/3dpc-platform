import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema';
import { NestedEnumprocess_templates_categoryNullableFilterObjectSchema as NestedEnumprocess_templates_categoryNullableFilterObjectSchema } from './NestedEnumprocess_templates_categoryNullableFilter.schema'

const makeSchema = () => z.object({
  equals: process_templates_categorySchema.optional().nullable(),
  in: process_templates_categorySchema.array().optional().nullable(),
  notIn: process_templates_categorySchema.array().optional().nullable(),
  not: z.union([process_templates_categorySchema, z.lazy(() => NestedEnumprocess_templates_categoryNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const Enumprocess_templates_categoryNullableFilterObjectSchema: z.ZodType<Prisma.Enumprocess_templates_categoryNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_templates_categoryNullableFilter>;
export const Enumprocess_templates_categoryNullableFilterObjectZodSchema = makeSchema();
