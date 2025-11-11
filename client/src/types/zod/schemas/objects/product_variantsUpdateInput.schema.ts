import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { productsUpdateOneRequiredWithoutProduct_variantsNestedInputObjectSchema as productsUpdateOneRequiredWithoutProduct_variantsNestedInputObjectSchema } from './productsUpdateOneRequiredWithoutProduct_variantsNestedInput.schema'

const makeSchema = () => z.object({
  material_id: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  name: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  image_file_id: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  background_color: z.union([z.string().max(9), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  model_color: z.union([z.string().max(9), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  products: z.lazy(() => productsUpdateOneRequiredWithoutProduct_variantsNestedInputObjectSchema).optional()
}).strict();
export const product_variantsUpdateInputObjectSchema: z.ZodType<Prisma.product_variantsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsUpdateInput>;
export const product_variantsUpdateInputObjectZodSchema = makeSchema();
