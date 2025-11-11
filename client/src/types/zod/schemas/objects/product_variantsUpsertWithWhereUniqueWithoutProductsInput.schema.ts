import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './product_variantsWhereUniqueInput.schema';
import { product_variantsUpdateWithoutProductsInputObjectSchema as product_variantsUpdateWithoutProductsInputObjectSchema } from './product_variantsUpdateWithoutProductsInput.schema';
import { product_variantsUncheckedUpdateWithoutProductsInputObjectSchema as product_variantsUncheckedUpdateWithoutProductsInputObjectSchema } from './product_variantsUncheckedUpdateWithoutProductsInput.schema';
import { product_variantsCreateWithoutProductsInputObjectSchema as product_variantsCreateWithoutProductsInputObjectSchema } from './product_variantsCreateWithoutProductsInput.schema';
import { product_variantsUncheckedCreateWithoutProductsInputObjectSchema as product_variantsUncheckedCreateWithoutProductsInputObjectSchema } from './product_variantsUncheckedCreateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => product_variantsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => product_variantsUpdateWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUncheckedUpdateWithoutProductsInputObjectSchema)]),
  create: z.union([z.lazy(() => product_variantsCreateWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUncheckedCreateWithoutProductsInputObjectSchema)])
}).strict();
export const product_variantsUpsertWithWhereUniqueWithoutProductsInputObjectSchema: z.ZodType<Prisma.product_variantsUpsertWithWhereUniqueWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsUpsertWithWhereUniqueWithoutProductsInput>;
export const product_variantsUpsertWithWhereUniqueWithoutProductsInputObjectZodSchema = makeSchema();
