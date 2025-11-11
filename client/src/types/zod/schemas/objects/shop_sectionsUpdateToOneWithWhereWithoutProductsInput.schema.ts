import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './shop_sectionsWhereInput.schema';
import { shop_sectionsUpdateWithoutProductsInputObjectSchema as shop_sectionsUpdateWithoutProductsInputObjectSchema } from './shop_sectionsUpdateWithoutProductsInput.schema';
import { shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema as shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema } from './shop_sectionsUncheckedUpdateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => shop_sectionsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => shop_sectionsUpdateWithoutProductsInputObjectSchema), z.lazy(() => shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema)])
}).strict();
export const shop_sectionsUpdateToOneWithWhereWithoutProductsInputObjectSchema: z.ZodType<Prisma.shop_sectionsUpdateToOneWithWhereWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsUpdateToOneWithWhereWithoutProductsInput>;
export const shop_sectionsUpdateToOneWithWhereWithoutProductsInputObjectZodSchema = makeSchema();
