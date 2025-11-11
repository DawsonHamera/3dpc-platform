import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableFloatFieldUpdateOperationsInputObjectSchema as NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { product_variantsUpdateManyWithoutProductsNestedInputObjectSchema as product_variantsUpdateManyWithoutProductsNestedInputObjectSchema } from './product_variantsUpdateManyWithoutProductsNestedInput.schema';
import { shop_sectionsUpdateOneWithoutProductsNestedInputObjectSchema as shop_sectionsUpdateOneWithoutProductsNestedInputObjectSchema } from './shop_sectionsUpdateOneWithoutProductsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  price: z.union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  default_variant_id: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  custom_options: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  tags: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  product_variants: z.lazy(() => product_variantsUpdateManyWithoutProductsNestedInputObjectSchema).optional(),
  shop_sections: z.lazy(() => shop_sectionsUpdateOneWithoutProductsNestedInputObjectSchema).optional()
}).strict();
export const productsUpdateWithoutModelsInputObjectSchema: z.ZodType<Prisma.productsUpdateWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpdateWithoutModelsInput>;
export const productsUpdateWithoutModelsInputObjectZodSchema = makeSchema();
