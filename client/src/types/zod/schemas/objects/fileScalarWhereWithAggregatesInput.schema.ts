import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { Enumfile_typeWithAggregatesFilterObjectSchema as Enumfile_typeWithAggregatesFilterObjectSchema } from './Enumfile_typeWithAggregatesFilter.schema';
import { file_typeSchema } from '../enums/file_type.schema'

const filescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => fileScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => fileScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => fileScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => fileScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => fileScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  original_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  stored_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  mime_type: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  size: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  path: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  uploaded_by: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => Enumfile_typeWithAggregatesFilterObjectSchema), file_typeSchema]).optional()
}).strict();
export const fileScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.fileScalarWhereWithAggregatesInput> = filescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.fileScalarWhereWithAggregatesInput>;
export const fileScalarWhereWithAggregatesInputObjectZodSchema = filescalarwherewithaggregatesinputSchema;
