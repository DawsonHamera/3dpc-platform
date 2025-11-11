import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateWithoutModelsInputObjectSchema as productsCreateWithoutModelsInputObjectSchema } from './productsCreateWithoutModelsInput.schema';
import { productsUncheckedCreateWithoutModelsInputObjectSchema as productsUncheckedCreateWithoutModelsInputObjectSchema } from './productsUncheckedCreateWithoutModelsInput.schema';
import { productsCreateOrConnectWithoutModelsInputObjectSchema as productsCreateOrConnectWithoutModelsInputObjectSchema } from './productsCreateOrConnectWithoutModelsInput.schema';
import { productsUpsertWithWhereUniqueWithoutModelsInputObjectSchema as productsUpsertWithWhereUniqueWithoutModelsInputObjectSchema } from './productsUpsertWithWhereUniqueWithoutModelsInput.schema';
import { productsCreateManyModelsInputEnvelopeObjectSchema as productsCreateManyModelsInputEnvelopeObjectSchema } from './productsCreateManyModelsInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema';
import { productsUpdateWithWhereUniqueWithoutModelsInputObjectSchema as productsUpdateWithWhereUniqueWithoutModelsInputObjectSchema } from './productsUpdateWithWhereUniqueWithoutModelsInput.schema';
import { productsUpdateManyWithWhereWithoutModelsInputObjectSchema as productsUpdateManyWithWhereWithoutModelsInputObjectSchema } from './productsUpdateManyWithWhereWithoutModelsInput.schema';
import { productsScalarWhereInputObjectSchema as productsScalarWhereInputObjectSchema } from './productsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => productsCreateWithoutModelsInputObjectSchema), z.lazy(() => productsCreateWithoutModelsInputObjectSchema).array(), z.lazy(() => productsUncheckedCreateWithoutModelsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutModelsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => productsCreateOrConnectWithoutModelsInputObjectSchema), z.lazy(() => productsCreateOrConnectWithoutModelsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => productsUpsertWithWhereUniqueWithoutModelsInputObjectSchema), z.lazy(() => productsUpsertWithWhereUniqueWithoutModelsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => productsCreateManyModelsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => productsUpdateWithWhereUniqueWithoutModelsInputObjectSchema), z.lazy(() => productsUpdateWithWhereUniqueWithoutModelsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => productsUpdateManyWithWhereWithoutModelsInputObjectSchema), z.lazy(() => productsUpdateManyWithWhereWithoutModelsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => productsScalarWhereInputObjectSchema), z.lazy(() => productsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const productsUncheckedUpdateManyWithoutModelsNestedInputObjectSchema: z.ZodType<Prisma.productsUncheckedUpdateManyWithoutModelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUncheckedUpdateManyWithoutModelsNestedInput>;
export const productsUncheckedUpdateManyWithoutModelsNestedInputObjectZodSchema = makeSchema();
