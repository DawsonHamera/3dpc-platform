import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithoutModelsInputObjectSchema as productsUpdateWithoutModelsInputObjectSchema } from './productsUpdateWithoutModelsInput.schema';
import { productsUncheckedUpdateWithoutModelsInputObjectSchema as productsUncheckedUpdateWithoutModelsInputObjectSchema } from './productsUncheckedUpdateWithoutModelsInput.schema';
import { productsCreateWithoutModelsInputObjectSchema as productsCreateWithoutModelsInputObjectSchema } from './productsCreateWithoutModelsInput.schema';
import { productsUncheckedCreateWithoutModelsInputObjectSchema as productsUncheckedCreateWithoutModelsInputObjectSchema } from './productsUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => productsUpdateWithoutModelsInputObjectSchema), z.lazy(() => productsUncheckedUpdateWithoutModelsInputObjectSchema)]),
  create: z.union([z.lazy(() => productsCreateWithoutModelsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const productsUpsertWithWhereUniqueWithoutModelsInputObjectSchema: z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpsertWithWhereUniqueWithoutModelsInput>;
export const productsUpsertWithWhereUniqueWithoutModelsInputObjectZodSchema = makeSchema();
