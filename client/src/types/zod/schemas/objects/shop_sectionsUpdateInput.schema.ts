import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { productsUpdateManyWithoutShop_sectionsNestedInputObjectSchema as productsUpdateManyWithoutShop_sectionsNestedInputObjectSchema } from './productsUpdateManyWithoutShop_sectionsNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  label: z.union([z.string().max(255), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  order_index: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  products: z.lazy(() => productsUpdateManyWithoutShop_sectionsNestedInputObjectSchema).optional()
}).strict();
export const shop_sectionsUpdateInputObjectSchema: z.ZodType<Prisma.shop_sectionsUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsUpdateInput>;
export const shop_sectionsUpdateInputObjectZodSchema = makeSchema();
