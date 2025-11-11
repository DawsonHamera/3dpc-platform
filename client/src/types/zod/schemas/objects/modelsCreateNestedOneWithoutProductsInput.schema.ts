import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsCreateWithoutProductsInputObjectSchema as modelsCreateWithoutProductsInputObjectSchema } from './modelsCreateWithoutProductsInput.schema';
import { modelsUncheckedCreateWithoutProductsInputObjectSchema as modelsUncheckedCreateWithoutProductsInputObjectSchema } from './modelsUncheckedCreateWithoutProductsInput.schema';
import { modelsCreateOrConnectWithoutProductsInputObjectSchema as modelsCreateOrConnectWithoutProductsInputObjectSchema } from './modelsCreateOrConnectWithoutProductsInput.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './modelsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => modelsCreateWithoutProductsInputObjectSchema), z.lazy(() => modelsUncheckedCreateWithoutProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => modelsCreateOrConnectWithoutProductsInputObjectSchema).optional(),
  connect: z.lazy(() => modelsWhereUniqueInputObjectSchema).optional()
}).strict();
export const modelsCreateNestedOneWithoutProductsInputObjectSchema: z.ZodType<Prisma.modelsCreateNestedOneWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsCreateNestedOneWithoutProductsInput>;
export const modelsCreateNestedOneWithoutProductsInputObjectZodSchema = makeSchema();
