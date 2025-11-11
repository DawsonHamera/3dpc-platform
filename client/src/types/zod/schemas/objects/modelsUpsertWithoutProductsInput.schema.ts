import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsUpdateWithoutProductsInputObjectSchema as modelsUpdateWithoutProductsInputObjectSchema } from './modelsUpdateWithoutProductsInput.schema';
import { modelsUncheckedUpdateWithoutProductsInputObjectSchema as modelsUncheckedUpdateWithoutProductsInputObjectSchema } from './modelsUncheckedUpdateWithoutProductsInput.schema';
import { modelsCreateWithoutProductsInputObjectSchema as modelsCreateWithoutProductsInputObjectSchema } from './modelsCreateWithoutProductsInput.schema';
import { modelsUncheckedCreateWithoutProductsInputObjectSchema as modelsUncheckedCreateWithoutProductsInputObjectSchema } from './modelsUncheckedCreateWithoutProductsInput.schema';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './modelsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => modelsUpdateWithoutProductsInputObjectSchema), z.lazy(() => modelsUncheckedUpdateWithoutProductsInputObjectSchema)]),
  create: z.union([z.lazy(() => modelsCreateWithoutProductsInputObjectSchema), z.lazy(() => modelsUncheckedCreateWithoutProductsInputObjectSchema)]),
  where: z.lazy(() => modelsWhereInputObjectSchema).optional()
}).strict();
export const modelsUpsertWithoutProductsInputObjectSchema: z.ZodType<Prisma.modelsUpsertWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsUpsertWithoutProductsInput>;
export const modelsUpsertWithoutProductsInputObjectZodSchema = makeSchema();
