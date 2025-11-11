import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { filesCreateNestedOneWithoutMaterials_materials_image_file_idTofilesInputObjectSchema as filesCreateNestedOneWithoutMaterials_materials_image_file_idTofilesInputObjectSchema } from './filesCreateNestedOneWithoutMaterials_materials_image_file_idTofilesInput.schema';
import { printersCreateNestedManyWithoutMaterialsInputObjectSchema as printersCreateNestedManyWithoutMaterialsInputObjectSchema } from './printersCreateNestedManyWithoutMaterialsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  name: z.string().max(255),
  hex: z.string().max(7),
  type: z.string().max(100).optional().nullable(),
  vendor: z.string().max(255),
  min_temp: z.number().optional().nullable(),
  max_temp: z.number().optional().nullable(),
  details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  texture_url: z.string().max(255).optional().nullable(),
  cost: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cost' must be a Decimal",
}).optional().nullable(),
  cost_unit: z.string().max(50).optional().nullable(),
  supplier: z.string().max(255).optional().nullable(),
  safety_data: z.string().optional().nullable(),
  density: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'density' must be a Decimal",
}).optional().nullable(),
  files_materials_image_file_idTofiles: z.lazy(() => filesCreateNestedOneWithoutMaterials_materials_image_file_idTofilesInputObjectSchema).optional(),
  printers: z.lazy(() => printersCreateNestedManyWithoutMaterialsInputObjectSchema).optional()
}).strict();
export const materialsCreateWithoutFiles_materials_texture_file_idTofilesInputObjectSchema: z.ZodType<Prisma.materialsCreateWithoutFiles_materials_texture_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsCreateWithoutFiles_materials_texture_file_idTofilesInput>;
export const materialsCreateWithoutFiles_materials_texture_file_idTofilesInputObjectZodSchema = makeSchema();
