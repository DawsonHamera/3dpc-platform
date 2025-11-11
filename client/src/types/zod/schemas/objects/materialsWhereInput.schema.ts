import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { FilesNullableScalarRelationFilterObjectSchema as FilesNullableScalarRelationFilterObjectSchema } from './FilesNullableScalarRelationFilter.schema';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema';
import { PrintersListRelationFilterObjectSchema as PrintersListRelationFilterObjectSchema } from './PrintersListRelationFilter.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const materialswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => materialsWhereInputObjectSchema), z.lazy(() => materialsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => materialsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => materialsWhereInputObjectSchema), z.lazy(() => materialsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  hex: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(7)]).optional(),
  texture_file_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  image_file_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  type: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  vendor: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  min_temp: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  max_temp: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  texture_url: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  cost: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cost' must be a Decimal",
})]).optional().nullable(),
  cost_unit: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(50)]).optional().nullable(),
  supplier: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  safety_data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  density: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'density' must be a Decimal",
})]).optional().nullable(),
  files_materials_image_file_idTofiles: z.union([z.lazy(() => FilesNullableScalarRelationFilterObjectSchema), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  files_materials_texture_file_idTofiles: z.union([z.lazy(() => FilesNullableScalarRelationFilterObjectSchema), z.lazy(() => filesWhereInputObjectSchema)]).optional(),
  printers: z.lazy(() => PrintersListRelationFilterObjectSchema).optional()
}).strict();
export const materialsWhereInputObjectSchema: z.ZodType<Prisma.materialsWhereInput> = materialswhereinputSchema as unknown as z.ZodType<Prisma.materialsWhereInput>;
export const materialsWhereInputObjectZodSchema = materialswhereinputSchema;
