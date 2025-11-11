import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsScalarWhereInputObjectSchema as productsScalarWhereInputObjectSchema } from './productsScalarWhereInput.schema';
import { productsUpdateManyMutationInputObjectSchema as productsUpdateManyMutationInputObjectSchema } from './productsUpdateManyMutationInput.schema';
import { productsUncheckedUpdateManyWithoutModelsInputObjectSchema as productsUncheckedUpdateManyWithoutModelsInputObjectSchema } from './productsUncheckedUpdateManyWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => productsUpdateManyMutationInputObjectSchema), z.lazy(() => productsUncheckedUpdateManyWithoutModelsInputObjectSchema)])
}).strict();
export const productsUpdateManyWithWhereWithoutModelsInputObjectSchema: z.ZodType<Prisma.productsUpdateManyWithWhereWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpdateManyWithWhereWithoutModelsInput>;
export const productsUpdateManyWithWhereWithoutModelsInputObjectZodSchema = makeSchema();
