import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { shop_sectionsWhereUniqueInputObjectSchema as shop_sectionsWhereUniqueInputObjectSchema } from './shop_sectionsWhereUniqueInput.schema';
import { shop_sectionsCreateWithoutProductsInputObjectSchema as shop_sectionsCreateWithoutProductsInputObjectSchema } from './shop_sectionsCreateWithoutProductsInput.schema';
import { shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema as shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema } from './shop_sectionsUncheckedCreateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => shop_sectionsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => shop_sectionsCreateWithoutProductsInputObjectSchema), z.lazy(() => shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema)])
}).strict();
export const shop_sectionsCreateOrConnectWithoutProductsInputObjectSchema: z.ZodType<Prisma.shop_sectionsCreateOrConnectWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsCreateOrConnectWithoutProductsInput>;
export const shop_sectionsCreateOrConnectWithoutProductsInputObjectZodSchema = makeSchema();
