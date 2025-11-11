import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsScalarWhereInputObjectSchema as product_variantsScalarWhereInputObjectSchema } from './product_variantsScalarWhereInput.schema';
import { product_variantsUpdateManyMutationInputObjectSchema as product_variantsUpdateManyMutationInputObjectSchema } from './product_variantsUpdateManyMutationInput.schema';
import { product_variantsUncheckedUpdateManyWithoutProductsInputObjectSchema as product_variantsUncheckedUpdateManyWithoutProductsInputObjectSchema } from './product_variantsUncheckedUpdateManyWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => product_variantsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => product_variantsUpdateManyMutationInputObjectSchema), z.lazy(() => product_variantsUncheckedUpdateManyWithoutProductsInputObjectSchema)])
}).strict();
export const product_variantsUpdateManyWithWhereWithoutProductsInputObjectSchema: z.ZodType<Prisma.product_variantsUpdateManyWithWhereWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsUpdateManyWithWhereWithoutProductsInput>;
export const product_variantsUpdateManyWithWhereWithoutProductsInputObjectZodSchema = makeSchema();
