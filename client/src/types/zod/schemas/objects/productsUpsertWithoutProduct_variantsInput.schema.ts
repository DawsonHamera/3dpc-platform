import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsUpdateWithoutProduct_variantsInputObjectSchema as productsUpdateWithoutProduct_variantsInputObjectSchema } from './productsUpdateWithoutProduct_variantsInput.schema';
import { productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema as productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema } from './productsUncheckedUpdateWithoutProduct_variantsInput.schema';
import { productsCreateWithoutProduct_variantsInputObjectSchema as productsCreateWithoutProduct_variantsInputObjectSchema } from './productsCreateWithoutProduct_variantsInput.schema';
import { productsUncheckedCreateWithoutProduct_variantsInputObjectSchema as productsUncheckedCreateWithoutProduct_variantsInputObjectSchema } from './productsUncheckedCreateWithoutProduct_variantsInput.schema';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './productsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => productsUpdateWithoutProduct_variantsInputObjectSchema), z.lazy(() => productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema)]),
  create: z.union([z.lazy(() => productsCreateWithoutProduct_variantsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutProduct_variantsInputObjectSchema)]),
  where: z.lazy(() => productsWhereInputObjectSchema).optional()
}).strict();
export const productsUpsertWithoutProduct_variantsInputObjectSchema: z.ZodType<Prisma.productsUpsertWithoutProduct_variantsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpsertWithoutProduct_variantsInput>;
export const productsUpsertWithoutProduct_variantsInputObjectZodSchema = makeSchema();
