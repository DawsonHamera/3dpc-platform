import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './product_variantsWhereUniqueInput.schema';
import { product_variantsUpdateWithoutProductsInputObjectSchema as product_variantsUpdateWithoutProductsInputObjectSchema } from './product_variantsUpdateWithoutProductsInput.schema';
import { product_variantsUncheckedUpdateWithoutProductsInputObjectSchema as product_variantsUncheckedUpdateWithoutProductsInputObjectSchema } from './product_variantsUncheckedUpdateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => product_variantsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => product_variantsUpdateWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUncheckedUpdateWithoutProductsInputObjectSchema)])
}).strict();
export const product_variantsUpdateWithWhereUniqueWithoutProductsInputObjectSchema: z.ZodType<Prisma.product_variantsUpdateWithWhereUniqueWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsUpdateWithWhereUniqueWithoutProductsInput>;
export const product_variantsUpdateWithWhereUniqueWithoutProductsInputObjectZodSchema = makeSchema();
