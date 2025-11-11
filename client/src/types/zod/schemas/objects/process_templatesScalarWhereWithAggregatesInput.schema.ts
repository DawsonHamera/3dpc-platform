import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { Enumprocess_templates_categoryNullableWithAggregatesFilterObjectSchema as Enumprocess_templates_categoryNullableWithAggregatesFilterObjectSchema } from './Enumprocess_templates_categoryNullableWithAggregatesFilter.schema';
import { process_templates_categorySchema } from '../enums/process_templates_category.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const process_templatesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => process_templatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => process_templatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_templatesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_templatesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => process_templatesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  version: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  category: z.union([z.lazy(() => Enumprocess_templates_categoryNullableWithAggregatesFilterObjectSchema), process_templates_categorySchema]).optional().nullable(),
  estimated_duration: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const process_templatesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.process_templatesScalarWhereWithAggregatesInput> = process_templatesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.process_templatesScalarWhereWithAggregatesInput>;
export const process_templatesScalarWhereWithAggregatesInputObjectZodSchema = process_templatesscalarwherewithaggregatesinputSchema;
