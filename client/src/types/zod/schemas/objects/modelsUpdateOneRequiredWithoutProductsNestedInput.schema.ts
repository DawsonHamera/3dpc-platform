import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsCreateWithoutProductsInputObjectSchema as modelsCreateWithoutProductsInputObjectSchema } from './modelsCreateWithoutProductsInput.schema';
import { modelsUncheckedCreateWithoutProductsInputObjectSchema as modelsUncheckedCreateWithoutProductsInputObjectSchema } from './modelsUncheckedCreateWithoutProductsInput.schema';
import { modelsCreateOrConnectWithoutProductsInputObjectSchema as modelsCreateOrConnectWithoutProductsInputObjectSchema } from './modelsCreateOrConnectWithoutProductsInput.schema';
import { modelsUpsertWithoutProductsInputObjectSchema as modelsUpsertWithoutProductsInputObjectSchema } from './modelsUpsertWithoutProductsInput.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './modelsWhereUniqueInput.schema';
import { modelsUpdateToOneWithWhereWithoutProductsInputObjectSchema as modelsUpdateToOneWithWhereWithoutProductsInputObjectSchema } from './modelsUpdateToOneWithWhereWithoutProductsInput.schema';
import { modelsUpdateWithoutProductsInputObjectSchema as modelsUpdateWithoutProductsInputObjectSchema } from './modelsUpdateWithoutProductsInput.schema';
import { modelsUncheckedUpdateWithoutProductsInputObjectSchema as modelsUncheckedUpdateWithoutProductsInputObjectSchema } from './modelsUncheckedUpdateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => modelsCreateWithoutProductsInputObjectSchema), z.lazy(() => modelsUncheckedCreateWithoutProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => modelsCreateOrConnectWithoutProductsInputObjectSchema).optional(),
  upsert: z.lazy(() => modelsUpsertWithoutProductsInputObjectSchema).optional(),
  connect: z.lazy(() => modelsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => modelsUpdateToOneWithWhereWithoutProductsInputObjectSchema), z.lazy(() => modelsUpdateWithoutProductsInputObjectSchema), z.lazy(() => modelsUncheckedUpdateWithoutProductsInputObjectSchema)]).optional()
}).strict();
export const modelsUpdateOneRequiredWithoutProductsNestedInputObjectSchema: z.ZodType<Prisma.modelsUpdateOneRequiredWithoutProductsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsUpdateOneRequiredWithoutProductsNestedInput>;
export const modelsUpdateOneRequiredWithoutProductsNestedInputObjectZodSchema = makeSchema();
