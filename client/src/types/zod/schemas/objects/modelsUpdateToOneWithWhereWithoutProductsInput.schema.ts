import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './modelsWhereInput.schema';
import { modelsUpdateWithoutProductsInputObjectSchema as modelsUpdateWithoutProductsInputObjectSchema } from './modelsUpdateWithoutProductsInput.schema';
import { modelsUncheckedUpdateWithoutProductsInputObjectSchema as modelsUncheckedUpdateWithoutProductsInputObjectSchema } from './modelsUncheckedUpdateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => modelsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => modelsUpdateWithoutProductsInputObjectSchema), z.lazy(() => modelsUncheckedUpdateWithoutProductsInputObjectSchema)])
}).strict();
export const modelsUpdateToOneWithWhereWithoutProductsInputObjectSchema: z.ZodType<Prisma.modelsUpdateToOneWithWhereWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsUpdateToOneWithWhereWithoutProductsInput>;
export const modelsUpdateToOneWithWhereWithoutProductsInputObjectZodSchema = makeSchema();
