import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsCreateWithoutProductsInputObjectSchema as product_variantsCreateWithoutProductsInputObjectSchema } from './product_variantsCreateWithoutProductsInput.schema';
import { product_variantsUncheckedCreateWithoutProductsInputObjectSchema as product_variantsUncheckedCreateWithoutProductsInputObjectSchema } from './product_variantsUncheckedCreateWithoutProductsInput.schema';
import { product_variantsCreateOrConnectWithoutProductsInputObjectSchema as product_variantsCreateOrConnectWithoutProductsInputObjectSchema } from './product_variantsCreateOrConnectWithoutProductsInput.schema';
import { product_variantsCreateManyProductsInputEnvelopeObjectSchema as product_variantsCreateManyProductsInputEnvelopeObjectSchema } from './product_variantsCreateManyProductsInputEnvelope.schema';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './product_variantsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => product_variantsCreateWithoutProductsInputObjectSchema), z.lazy(() => product_variantsCreateWithoutProductsInputObjectSchema).array(), z.lazy(() => product_variantsUncheckedCreateWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUncheckedCreateWithoutProductsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => product_variantsCreateOrConnectWithoutProductsInputObjectSchema), z.lazy(() => product_variantsCreateOrConnectWithoutProductsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => product_variantsCreateManyProductsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => product_variantsWhereUniqueInputObjectSchema), z.lazy(() => product_variantsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const product_variantsCreateNestedManyWithoutProductsInputObjectSchema: z.ZodType<Prisma.product_variantsCreateNestedManyWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsCreateNestedManyWithoutProductsInput>;
export const product_variantsCreateNestedManyWithoutProductsInputObjectZodSchema = makeSchema();
