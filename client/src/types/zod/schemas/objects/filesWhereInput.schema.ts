import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { Enumfiles_typeFilterObjectSchema as Enumfiles_typeFilterObjectSchema } from './Enumfiles_typeFilter.schema';
import { files_typeSchema } from '../enums/files_type.schema';
import { EventsListRelationFilterObjectSchema as EventsListRelationFilterObjectSchema } from './EventsListRelationFilter.schema';
import { UsersNullableScalarRelationFilterObjectSchema as UsersNullableScalarRelationFilterObjectSchema } from './UsersNullableScalarRelationFilter.schema';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema';
import { MaterialsListRelationFilterObjectSchema as MaterialsListRelationFilterObjectSchema } from './MaterialsListRelationFilter.schema';
import { PrintersListRelationFilterObjectSchema as PrintersListRelationFilterObjectSchema } from './PrintersListRelationFilter.schema'

const fileswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => filesWhereInputObjectSchema), z.lazy(() => filesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => filesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => filesWhereInputObjectSchema), z.lazy(() => filesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  original_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  stored_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  mime_type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  size: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  path: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  uploaded_by: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  type: z.union([z.lazy(() => Enumfiles_typeFilterObjectSchema), files_typeSchema]).optional(),
  events: z.lazy(() => EventsListRelationFilterObjectSchema).optional(),
  uploader: z.union([z.lazy(() => UsersNullableScalarRelationFilterObjectSchema), z.lazy(() => usersWhereInputObjectSchema)]).optional(),
  materials_materials_image_file_idTofiles: z.lazy(() => MaterialsListRelationFilterObjectSchema).optional(),
  materials_materials_texture_file_idTofiles: z.lazy(() => MaterialsListRelationFilterObjectSchema).optional(),
  printers: z.lazy(() => PrintersListRelationFilterObjectSchema).optional()
}).strict();
export const filesWhereInputObjectSchema: z.ZodType<Prisma.filesWhereInput> = fileswhereinputSchema as unknown as z.ZodType<Prisma.filesWhereInput>;
export const filesWhereInputObjectZodSchema = fileswhereinputSchema;
