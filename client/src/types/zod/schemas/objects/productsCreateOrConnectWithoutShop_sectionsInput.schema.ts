import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsCreateWithoutShop_sectionsInputObjectSchema as productsCreateWithoutShop_sectionsInputObjectSchema } from './productsCreateWithoutShop_sectionsInput.schema';
import { productsUncheckedCreateWithoutShop_sectionsInputObjectSchema as productsUncheckedCreateWithoutShop_sectionsInputObjectSchema } from './productsUncheckedCreateWithoutShop_sectionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => productsCreateWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutShop_sectionsInputObjectSchema)])
}).strict();
export const productsCreateOrConnectWithoutShop_sectionsInputObjectSchema: z.ZodType<Prisma.productsCreateOrConnectWithoutShop_sectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateOrConnectWithoutShop_sectionsInput>;
export const productsCreateOrConnectWithoutShop_sectionsInputObjectZodSchema = makeSchema();
