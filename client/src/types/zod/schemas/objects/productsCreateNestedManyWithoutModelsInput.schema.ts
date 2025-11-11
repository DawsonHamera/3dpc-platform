import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateWithoutModelsInputObjectSchema as productsCreateWithoutModelsInputObjectSchema } from './productsCreateWithoutModelsInput.schema';
import { productsUncheckedCreateWithoutModelsInputObjectSchema as productsUncheckedCreateWithoutModelsInputObjectSchema } from './productsUncheckedCreateWithoutModelsInput.schema';
import { productsCreateOrConnectWithoutModelsInputObjectSchema as productsCreateOrConnectWithoutModelsInputObjectSchema } from './productsCreateOrConnectWithoutModelsInput.schema';
import { productsCreateManyModelsInputEnvelopeObjectSchema as productsCreateManyModelsInputEnvelopeObjectSchema } from './productsCreateManyModelsInputEnvelope.schema';
import { productsWhereUniqueInputObjectSchema as productsWhereUniqueInputObjectSchema } from './productsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => productsCreateWithoutModelsInputObjectSchema), z.lazy(() => productsCreateWithoutModelsInputObjectSchema).array(), z.lazy(() => productsUncheckedCreateWithoutModelsInputObjectSchema), z.lazy(() => productsUncheckedCreateWithoutModelsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => productsCreateOrConnectWithoutModelsInputObjectSchema), z.lazy(() => productsCreateOrConnectWithoutModelsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => productsCreateManyModelsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => productsWhereUniqueInputObjectSchema), z.lazy(() => productsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const productsCreateNestedManyWithoutModelsInputObjectSchema: z.ZodType<Prisma.productsCreateNestedManyWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateNestedManyWithoutModelsInput>;
export const productsCreateNestedManyWithoutModelsInputObjectZodSchema = makeSchema();
