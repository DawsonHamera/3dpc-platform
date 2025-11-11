import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsCreateWithoutProductsInputObjectSchema as product_variantsCreateWithoutProductsInputObjectSchema } from './product_variantsCreateWithoutProductsInput.schema';
import { product_variantsUncheckedCreateWithoutProductsInputObjectSchema as product_variantsUncheckedCreateWithoutProductsInputObjectSchema } from './product_variantsUncheckedCreateWithoutProductsInput.schema';
import { product_variantsCreateOrConnectWithoutProductsInputObjectSchema as product_variantsCreateOrConnectWithoutProductsInputObjectSchema } from './product_variantsCreateOrConnectWithoutProductsInput.schema';
import { product_variantsUpsertWithWhereUniqueWithoutProductsInputObjectSchema as product_variantsUpsertWithWhereUniqueWithoutProductsInputObjectSchema } from './product_variantsUpsertWithWhereUniqueWithoutProductsInput.schema';
import { product_variantsCreateManyProductsInputEnvelopeObjectSchema as product_variantsCreateManyProductsInputEnvelopeObjectSchema } from './product_variantsCreateManyProductsInputEnvelope.schema';
import { product_variantsWhereUniqueInputObjectSchema as product_variantsWhereUniqueInputObjectSchema } from './product_variantsWhereUniqueInput.schema';
import { product_variantsUpdateWithWhereUniqueWithoutProductsInputObjectSchema as product_variantsUpdateWithWhereUniqueWithoutProductsInputObjectSchema } from './product_variantsUpdateWithWhereUniqueWithoutProductsInput.schema';
import { product_variantsUpdateManyWithWhereWithoutProductsInputObjectSchema as product_variantsUpdateManyWithWhereWithoutProductsInputObjectSchema } from './product_variantsUpdateManyWithWhereWithoutProductsInput.schema';
import { product_variantsScalarWhereInputObjectSchema as product_variantsScalarWhereInputObjectSchema } from './product_variantsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => product_variantsCreateWithoutProductsInputObjectSchema), z.lazy(() => product_variantsCreateWithoutProductsInputObjectSchema).array(), z.lazy(() => product_variantsUncheckedCreateWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUncheckedCreateWithoutProductsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => product_variantsCreateOrConnectWithoutProductsInputObjectSchema), z.lazy(() => product_variantsCreateOrConnectWithoutProductsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => product_variantsUpsertWithWhereUniqueWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUpsertWithWhereUniqueWithoutProductsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => product_variantsCreateManyProductsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => product_variantsWhereUniqueInputObjectSchema), z.lazy(() => product_variantsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => product_variantsWhereUniqueInputObjectSchema), z.lazy(() => product_variantsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => product_variantsWhereUniqueInputObjectSchema), z.lazy(() => product_variantsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => product_variantsWhereUniqueInputObjectSchema), z.lazy(() => product_variantsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => product_variantsUpdateWithWhereUniqueWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUpdateWithWhereUniqueWithoutProductsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => product_variantsUpdateManyWithWhereWithoutProductsInputObjectSchema), z.lazy(() => product_variantsUpdateManyWithWhereWithoutProductsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => product_variantsScalarWhereInputObjectSchema), z.lazy(() => product_variantsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const product_variantsUpdateManyWithoutProductsNestedInputObjectSchema: z.ZodType<Prisma.product_variantsUpdateManyWithoutProductsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsUpdateManyWithoutProductsNestedInput>;
export const product_variantsUpdateManyWithoutProductsNestedInputObjectZodSchema = makeSchema();
