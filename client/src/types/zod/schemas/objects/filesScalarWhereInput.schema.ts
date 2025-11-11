import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Enumfiles_typeFilterObjectSchema as Enumfiles_typeFilterObjectSchema } from './Enumfiles_typeFilter.schema';
import { files_typeSchema } from '../enums/files_type.schema'

const filesscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => filesScalarWhereInputObjectSchema), z.lazy(() => filesScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => filesScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => filesScalarWhereInputObjectSchema), z.lazy(() => filesScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  original_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  stored_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  mime_type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  size: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  path: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  uploaded_by: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => Enumfiles_typeFilterObjectSchema), files_typeSchema]).optional()
}).strict();
export const filesScalarWhereInputObjectSchema: z.ZodType<Prisma.filesScalarWhereInput> = filesscalarwhereinputSchema as unknown as z.ZodType<Prisma.filesScalarWhereInput>;
export const filesScalarWhereInputObjectZodSchema = filesscalarwhereinputSchema;
