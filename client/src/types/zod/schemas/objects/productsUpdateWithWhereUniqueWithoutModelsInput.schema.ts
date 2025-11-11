import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutModelsInputObjectSchema as productsUpdateWithoutModelsInputObjectSchema } from './productsUpdateWithoutModelsInput.schema';
import { productsUncheckedUpdateWithoutModelsInputObjectSchema as productsUncheckedUpdateWithoutModelsInputObjectSchema } from './productsUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => productsUpdateWithoutModelsInputObjectSchema), z.lazy(() => productsUncheckedUpdateWithoutModelsInputObjectSchema)])
}).strict();
export const productsUpdateWithWhereUniqueWithoutModelsInputObjectSchema: z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpdateWithWhereUniqueWithoutModelsInput>;
export const productsUpdateWithWhereUniqueWithoutModelsInputObjectZodSchema = makeSchema();
