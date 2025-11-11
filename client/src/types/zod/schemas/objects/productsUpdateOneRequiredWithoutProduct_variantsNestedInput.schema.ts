import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateWithoutProduct_variantsInputObjectSchema as productsCreateWithoutProduct_variantsInputObjectSchema } from './productsCreateWithoutProduct_variantsInput.schema';
import { productsUncheckedCreateWithoutProduct_variantsInputObjectSchema as productsUncheckedCreateWithoutProduct_variantsInputObjectSchema } from './productsUncheckedCreateWithoutProduct_variantsInput.schema';
import { productsCreateOrConnectWithoutProduct_variantsInputObjectSchema as productsCreateOrConnectWithoutProduct_variantsInputObjectSchema } from './productsCreateOrConnectWithoutProduct_variantsInput.schema';
import { productsUpsertWithoutProduct_variantsInputObjectSchema as productsUpsertWithoutProduct_variantsInputObjectSchema } from './productsUpsertWithoutProduct_variantsInput.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateToOneWithWhereWithoutProduct_variantsInputObjectSchema as productsUpdateToOneWithWhereWithoutProduct_variantsInputObjectSchema } from './productsUpdateToOneWithWhereWithoutProduct_variantsInput.schema';
import { productsUpdateWithoutProduct_variantsInputObjectSchema as productsUpdateWithoutProduct_variantsInputObjectSchema } from './productsUpdateWithoutProduct_variantsInput.schema';
import { productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema as productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema } from './productsUncheckedUpdateWithoutProduct_variantsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => productsCreateWithoutProduct_variantsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutProduct_variantsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => productsCreateOrConnectWithoutProduct_variantsInputObjectSchema).optional(),
  upsert: z.lazy(() => productsUpsertWithoutProduct_variantsInputObjectSchema).optional(),
  connect: z.lazy(() => productsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => productsUpdateToOneWithWhereWithoutProduct_variantsInputObjectSchema), z.lazy(() => productsUpdateWithoutProduct_variantsInputObjectSchema), z.lazy(() => productsUncheckedUpdateWithoutProduct_variantsInputObjectSchema)]).optional()
}).strict();
export const productsUpdateOneRequiredWithoutProduct_variantsNestedInputObjectSchema: z.ZodType<Prisma.productsUpdateOneRequiredWithoutProduct_variantsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpdateOneRequiredWithoutProduct_variantsNestedInput>;
export const productsUpdateOneRequiredWithoutProduct_variantsNestedInputObjectZodSchema = makeSchema();
