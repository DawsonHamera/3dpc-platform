import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateWithoutShop_sectionsInputObjectSchema as productsCreateWithoutShop_sectionsInputObjectSchema } from './productsCreateWithoutShop_sectionsInput.schema';
import { productsUncheckedCreateWithoutShop_sectionsInputObjectSchema as productsUncheckedCreateWithoutShop_sectionsInputObjectSchema } from './productsUncheckedCreateWithoutShop_sectionsInput.schema';
import { productsCreateOrConnectWithoutShop_sectionsInputObjectSchema as productsCreateOrConnectWithoutShop_sectionsInputObjectSchema } from './productsCreateOrConnectWithoutShop_sectionsInput.schema';
import { productsCreateManyShop_sectionsInputEnvelopeObjectSchema as productsCreateManyShop_sectionsInputEnvelopeObjectSchema } from './productsCreateManyShop_sectionsInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => productsCreateWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsCreateWithoutShop_sectionsInputObjectSchema).array(), z.lazy(() => productsUncheckedCreateWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutShop_sectionsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => productsCreateOrConnectWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsCreateOrConnectWithoutShop_sectionsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => productsCreateManyShop_sectionsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const productsCreateNestedManyWithoutShop_sectionsInputObjectSchema: z.ZodType<Prisma.productsCreateNestedManyWithoutShop_sectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateNestedManyWithoutShop_sectionsInput>;
export const productsCreateNestedManyWithoutShop_sectionsInputObjectZodSchema = makeSchema();
