import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereInputObjectSchema as productsWhereInputObjectSchema } from './productsWhereInput.schema';
import { productsUpdateWithoutProduct_variantsInputObjectSchema as productsUpdateWithoutProduct_variantsInputObjectSchema } from './productsUpdateWithoutProduct_variantsInput.schema';
import { productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema as productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema } from './productsUncheckedUpdateWithoutProduct_variantsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => productsUpdateWithoutProduct_variantsInputObjectSchema), z.lazy(() => productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema)])
}).strict();
export const productsUpdateToOneWithWhereWithoutProduct_variantsInputObjectSchema: z.ZodType<Prisma.productsUpdateToOneWithWhereWithoutProduct_variantsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpdateToOneWithWhereWithoutProduct_variantsInput>;
export const productsUpdateToOneWithWhereWithoutProduct_variantsInputObjectZodSchema = makeSchema();
