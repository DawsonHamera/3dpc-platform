import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsCreateWithoutProduct_variantsInputObjectSchema as productsCreateWithoutProduct_variantsInputObjectSchema } from './productsCreateWithoutProduct_variantsInput.schema';
import { productsUncheckedCreateWithoutProduct_variantsInputObjectSchema as productsUncheckedCreateWithoutProduct_variantsInputObjectSchema } from './productsUncheckedCreateWithoutProduct_variantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => productsCreateWithoutProduct_variantsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutProduct_variantsInputObjectSchema)])
}).strict();
export const productsCreateOrConnectWithoutProduct_variantsInputObjectSchema: z.ZodType<Prisma.productsCreateOrConnectWithoutProduct_variantsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateOrConnectWithoutProduct_variantsInput>;
export const productsCreateOrConnectWithoutProduct_variantsInputObjectZodSchema = makeSchema();
