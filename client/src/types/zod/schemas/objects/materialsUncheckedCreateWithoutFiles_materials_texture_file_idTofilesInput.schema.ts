import * as z from 'zod';
import { Prisma } from '@prisma/client';
import { printersUncheckedCreateNestedManyWithoutMaterialsInputObjectSchema as printersUncheckedCreateNestedManyWithoutMaterialsInputObjectSchema } from './printersUncheckedCreateNestedManyWithoutMaterialsInput.schema'

import { DecimalJSLikeSchema, isValidDecimalInput } from '../../helpers/decimal-helpers';
const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  hex: z.string(),
  image_file_id: z.number().int().optional().nullable(),
  type: z.string().optional().nullable(),
  vendor: z.string(),
  min_temp: z.number().optional().nullable(),
  max_temp: z.number().optional().nullable(),
  details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  texture_url: z.string().optional().nullable(),
  cost: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'cost' must be a Decimal",
}).optional().nullable(),
  cost_unit: z.string().optional().nullable(),
  supplier: z.string().optional().nullable(),
  safety_data: z.string().optional().nullable(),
  density: z.union([
  z.number(),
  z.string(),
  z.instanceof(Prisma.Decimal),
  DecimalJSLikeSchema,
]).refine((v) => isValidDecimalInput(v), {
  message: "Field 'density' must be a Decimal",
}).optional().nullable(),
  printers: z.lazy(() => printersUncheckedCreateNestedManyWithoutMaterialsInputObjectSchema).optional()
}).strict();
export const materialsUncheckedCreateWithoutFiles_materials_texture_file_idTofilesInputObjectSchema: z.ZodType<Prisma.materialsUncheckedCreateWithoutFiles_materials_texture_file_idTofilesInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsUncheckedCreateWithoutFiles_materials_texture_file_idTofilesInput>;
export const materialsUncheckedCreateWithoutFiles_materials_texture_file_idTofilesInputObjectZodSchema = makeSchema();
