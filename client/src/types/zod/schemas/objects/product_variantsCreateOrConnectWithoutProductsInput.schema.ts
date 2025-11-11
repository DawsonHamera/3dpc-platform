import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './product_variantsWhereUniqueInput.schema';
import { product_variantsCreateWithoutProductsInputObjectSchema as product_variantsCreateWithoutProductsInputObjectSchema } from './product_variantsCreateWithoutProductsInput.schema';
import { product_variantsUncheckedCreateWithoutProductsInputObjectSchema as product_variantsUncheckedCreateWithoutProductsInputObjectSchema } from './product_variantsUncheckedCreateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => product_variantsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => product_variantsCreateWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUncheckedCreateWithoutProductsInputObjectSchema)])
}).strict();
export const product_variantsCreateOrConnectWithoutProductsInputObjectSchema: z.ZodType<Prisma.product_variantsCreateOrConnectWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsCreateOrConnectWithoutProductsInput>;
export const product_variantsCreateOrConnectWithoutProductsInputObjectZodSchema = makeSchema();
