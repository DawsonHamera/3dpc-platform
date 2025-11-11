import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { shop_sectionsUpdateWithoutProductsInputObjectSchema as shop_sectionsUpdateWithoutProductsInputObjectSchema } from './shop_sectionsUpdateWithoutProductsInput.schema';
import { shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema as shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema } from './shop_sectionsUncheckedUpdateWithoutProductsInput.schema';
import { shop_sectionsCreateWithoutProductsInputObjectSchema as shop_sectionsCreateWithoutProductsInputObjectSchema } from './shop_sectionsCreateWithoutProductsInput.schema';
import { shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema as shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema } from './shop_sectionsUncheckedCreateWithoutProductsInput.schema';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './shop_sectionsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => shop_sectionsUpdateWithoutProductsInputObjectSchema), z.lazy(() => shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema)]),
  create: z.union([z.lazy(() => shop_sectionsCreateWithoutProductsInputObjectSchema), z.lazy(() => shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema)]),
  where: z.lazy(() => shop_sectionsWhereInputObjectSchema).optional()
}).strict();
export const shop_sectionsUpsertWithoutProductsInputObjectSchema: z.ZodType<Prisma.shop_sectionsUpsertWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsUpsertWithoutProductsInput>;
export const shop_sectionsUpsertWithoutProductsInputObjectZodSchema = makeSchema();
