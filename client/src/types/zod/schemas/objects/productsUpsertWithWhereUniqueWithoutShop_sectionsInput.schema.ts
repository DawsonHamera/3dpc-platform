import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutShop_sectionsInputObjectSchema as productsUpdateWithoutShop_sectionsInputObjectSchema } from './productsUpdateWithoutShop_sectionsInput.schema';
import { productsUncheckedUpdateWithoutShop_sectionsInputObjectSchema as productsUncheckedUpdateWithoutShop_sectionsInputObjectSchema } from './productsUncheckedUpdateWithoutShop_sectionsInput.schema';
import { productsCreateWithoutShop_sectionsInputObjectSchema as productsCreateWithoutShop_sectionsInputObjectSchema } from './productsCreateWithoutShop_sectionsInput.schema';
import { productsUncheckedCreateWithoutShop_sectionsInputObjectSchema as productsUncheckedCreateWithoutShop_sectionsInputObjectSchema } from './productsUncheckedCreateWithoutShop_sectionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => productsUpdateWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUncheckedUpdateWithoutShop_sectionsInputObjectSchema)]),
  create: z.union([z.lazy(() => productsCreateWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutShop_sectionsInputObjectSchema)])
}).strict();
export const productsUpsertWithWhereUniqueWithoutShop_sectionsInputObjectSchema: z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutShop_sectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutShop_sectionsInput>;
export const productsUpsertWithWhereUniqueWithoutShop_sectionsInputObjectZodSchema = makeSchema();
