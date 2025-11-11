import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { Enumfiles_typeWithAggregatesFilterObjectSchema as Enumfiles_typeWithAggregatesFilterObjectSchema } from './Enumfiles_typeWithAggregatesFilter.schema';
import { files_typeSchema } from '../enums/files_type.schema'

const filesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => filesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => filesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => filesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => filesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => filesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
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
  type: z.union([z.lazy(() => Enumfiles_typeWithAggregatesFilterObjectSchema), files_typeSchema]).optional()
}).strict();
export const filesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.filesScalarWhereWithAggregatesInput> = filesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.filesScalarWhereWithAggregatesInput>;
export const filesScalarWhereWithAggregatesInputObjectZodSchema = filesscalarwherewithaggregatesinputSchema;
