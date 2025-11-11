import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsUncheckedCreateNestedManyWithoutShop_sectionsInputObjectSchema as productsUncheckedCreateNestedManyWithoutShop_sectionsInputObjectSchema } from './productsUncheckedCreateNestedManyWithoutShop_sectionsInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100).optional().nullable(),
  label: z.string().max(255).optional().nullable(),
  order_index: z.number().int().optional().nullable(),
  products: z.lazy(() => productsUncheckedCreateNestedManyWithoutShop_sectionsInputObjectSchema)
}).strict();
export const shop_sectionsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.shop_sectionsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsUncheckedCreateInput>;
export const shop_sectionsUncheckedCreateInputObjectZodSchema = makeSchema();
