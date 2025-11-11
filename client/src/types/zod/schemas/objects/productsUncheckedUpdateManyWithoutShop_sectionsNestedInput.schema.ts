import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateWithoutShop_sectionsInputObjectSchema as productsCreateWithoutShop_sectionsInputObjectSchema } from './productsCreateWithoutShop_sectionsInput.schema';
import { productsUncheckedCreateWithoutShop_sectionsInputObjectSchema as productsUncheckedCreateWithoutShop_sectionsInputObjectSchema } from './productsUncheckedCreateWithoutShop_sectionsInput.schema';
import { productsCreateOrConnectWithoutShop_sectionsInputObjectSchema as productsCreateOrConnectWithoutShop_sectionsInputObjectSchema } from './productsCreateOrConnectWithoutShop_sectionsInput.schema';
import { productsUpsertWithWhereUniqueWithoutShop_sectionsInputObjectSchema as productsUpsertWithWhereUniqueWithoutShop_sectionsInputObjectSchema } from './productsUpsertWithWhereUniqueWithoutShop_sectionsInput.schema';
import { productsCreateManyShop_sectionsInputEnvelopeObjectSchema as productsCreateManyShop_sectionsInputEnvelopeObjectSchema } from './productsCreateManyShop_sectionsInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithWhereUniqueWithoutShop_sectionsInputObjectSchema as productsUpdateWithWhereUniqueWithoutShop_sectionsInputObjectSchema } from './productsUpdateWithWhereUniqueWithoutShop_sectionsInput.schema';
import { productsUpdateManyWithWhereWithoutShop_sectionsInputObjectSchema as productsUpdateManyWithWhereWithoutShop_sectionsInputObjectSchema } from './productsUpdateManyWithWhereWithoutShop_sectionsInput.schema';
import { productsScalarWhereInputObjectSchema as productsScalarWhereInputObjectSchema } from './productsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => productsCreateWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsCreateWithoutShop_sectionsInputObjectSchema).array(), z.lazy(() => productsUncheckedCreateWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutShop_sectionsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => productsCreateOrConnectWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsCreateOrConnectWithoutShop_sectionsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => productsUpsertWithWhereUniqueWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUpsertWithWhereUniqueWithoutShop_sectionsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => productsCreateManyShop_sectionsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => productsUpdateWithWhereUniqueWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUpdateWithWhereUniqueWithoutShop_sectionsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => productsUpdateManyWithWhereWithoutShop_sectionsInputObjectSchema), z.lazy(() => productsUpdateManyWithWhereWithoutShop_sectionsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => productsScalarWhereInputObjectSchema), z.lazy(() => productsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const productsUncheckedUpdateManyWithoutShop_sectionsNestedInputObjectSchema: z.ZodType<Prisma.productsUncheckedUpdateManyWithoutShop_sectionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUncheckedUpdateManyWithoutShop_sectionsNestedInput>;
export const productsUncheckedUpdateManyWithoutShop_sectionsNestedInputObjectZodSchema = makeSchema();
