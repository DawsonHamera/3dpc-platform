import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsScalarWhereInputObjectSchema as productsScalarWhereInputObjectSchema } from './productsScalarWhereInput.schema';
import { productsUpdateManyMutationInputObjectSchema as productsUpdateManyMutationInputObjectSchema } from './productsUpdateManyMutationInput.schema';
import { productsUncheckedUpdateManyWithoutShop_sectionsInputObjectSchema as productsUncheckedUpdateManyWithoutShop_sectionsInputObjectSchema } from './productsUncheckedUpdateManyWithoutShop_sectionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => productsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => productsUpdateManyMutationInputObjectSchema), z.lazy(() => productsUncheckedUpdateManyWithoutShop_sectionsInputObjectSchema)])
}).strict();
export const productsUpdateManyWithWhereWithoutShop_sectionsInputObjectSchema: z.ZodType<Prisma.productsUpdateManyWithWhereWithoutShop_sectionsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsUpdateManyWithWhereWithoutShop_sectionsInput>;
export const productsUpdateManyWithWhereWithoutShop_sectionsInputObjectZodSchema = makeSchema();
