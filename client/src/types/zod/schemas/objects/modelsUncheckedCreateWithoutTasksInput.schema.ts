import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsUncheckedCreateNestedManyWithoutModelsInputObjectSchema as productsUncheckedCreateNestedManyWithoutModelsInputObjectSchema } from './productsUncheckedCreateNestedManyWithoutModelsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  image_file_id: z.number().int(),
  model_file_id: z.number().int(),
  material_slots: z.string(),
  estimated_duration: z.number().int().optional().nullable(),
  estimated_filament: z.number().optional().nullable(),
  description: z.string().optional().nullable(),
  tags: z.string(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  deleted_at: z.coerce.date().optional().nullable(),
  products: z.lazy(() => productsUncheckedCreateNestedManyWithoutModelsInputObjectSchema).optional()
}).strict();
export const modelsUncheckedCreateWithoutTasksInputObjectSchema: z.ZodType<Prisma.modelsUncheckedCreateWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsUncheckedCreateWithoutTasksInput>;
export const modelsUncheckedCreateWithoutTasksInputObjectZodSchema = makeSchema();
