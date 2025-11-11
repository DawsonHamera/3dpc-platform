import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './modelsWhereUniqueInput.schema';
import { modelsCreateWithoutProductsInputObjectSchema as modelsCreateWithoutProductsInputObjectSchema } from './modelsCreateWithoutProductsInput.schema';
import { modelsUncheckedCreateWithoutProductsInputObjectSchema as modelsUncheckedCreateWithoutProductsInputObjectSchema } from './modelsUncheckedCreateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => modelsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => modelsCreateWithoutProductsInputObjectSchema), z.lazy(() => modelsUncheckedCreateWithoutProductsInputObjectSchema)])
}).strict();
export const modelsCreateOrConnectWithoutProductsInputObjectSchema: z.ZodType<Prisma.modelsCreateOrConnectWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsCreateOrConnectWithoutProductsInput>;
export const modelsCreateOrConnectWithoutProductsInputObjectZodSchema = makeSchema();
