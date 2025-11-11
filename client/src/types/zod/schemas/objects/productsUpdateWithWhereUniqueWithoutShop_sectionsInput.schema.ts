import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutShop_sectionsInputObjectSchema as productsUpdateWithoutShop_sectionsInputObjectSchema } from './productsUpdateWithoutShop_sectionsInput.schema';
import { productsUncheckedUpdateWithoutShop_sectionsInputObjectSchema as productsUncheckedUpdateWithoutShop_sectionsInputObjectSchema } from './productsUncheckedUpdateWithoutShop_sectionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => productsUpdateWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUncheckedUpdateWithoutShop_sectionsInputObjectSchema)])
}).strict();
export const productsUpdateWithWhereUniqueWithoutShop_sectionsInputObjectSchema: z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutShop_sectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutShop_sectionsInput>;
export const productsUpdateWithWhereUniqueWithoutShop_sectionsInputObjectZodSchema = makeSchema();
