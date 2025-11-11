import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateNestedManyWithoutShop_sectionsInputObjectSchema as productsCreateNestedManyWithoutShop_sectionsInputObjectSchema } from './productsCreateNestedManyWithoutShop_sectionsInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100).optional().nullable(),
  label: z.string().max(255).optional().nullable(),
  order_index: z.number().int().optional().nullable(),
  products: z.lazy(() => productsCreateNestedManyWithoutShop_sectionsInputObjectSchema)
}).strict();
export const shop_sectionsCreateInputObjectSchema: z.ZodType<Prisma.shop_sectionsCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsCreateInput>;
export const shop_sectionsCreateInputObjectZodSchema = makeSchema();
