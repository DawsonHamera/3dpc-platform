import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateWithoutProduct_variantsInputObjectSchema as productsCreateWithoutProduct_variantsInputObjectSchema } from './productsCreateWithoutProduct_variantsInput.schema';
import { productsUncheckedCreateWithoutProduct_variantsInputObjectSchema as productsUncheckedCreateWithoutProduct_variantsInputObjectSchema } from './productsUncheckedCreateWithoutProduct_variantsInput.schema';
import { productsCreateOrConnectWithoutProduct_variantsInputObjectSchema as productsCreateOrConnectWithoutProduct_variantsInputObjectSchema } from './productsCreateOrConnectWithoutProduct_variantsInput.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => productsCreateWithoutProduct_variantsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutProduct_variantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => productsCreateOrConnectWithoutProduct_variantsInputObjectSchema).optional(),
  connect: z.lazy(() => productsWhereUniqueInputObjectSchema).optional()
}).strict();
export const productsCreateNestedOneWithoutProduct_variantsInputObjectSchema: z.ZodType<Prisma.productsCreateNestedOneWithoutProduct_variantsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateNestedOneWithoutProduct_variantsInput>;
export const productsCreateNestedOneWithoutProduct_variantsInputObjectZodSchema = makeSchema();
