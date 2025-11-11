import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { shop_sectionsCreateWithoutProductsInputObjectSchema as shop_sectionsCreateWithoutProductsInputObjectSchema } from './shop_sectionsCreateWithoutProductsInput.schema';
import { shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema as shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema } from './shop_sectionsUncheckedCreateWithoutProductsInput.schema';
import { shop_sectionsCreateOrConnectWithoutProductsInputObjectSchema as shop_sectionsCreateOrConnectWithoutProductsInputObjectSchema } from './shop_sectionsCreateOrConnectWithoutProductsInput.schema';
import { shop_sectionsWhereUniqueInputObjectSchema as shop_sectionsWhereUniqueInputObjectSchema } from './shop_sectionsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => shop_sectionsCreateWithoutProductsInputObjectSchema), z.lazy(() => shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => shop_sectionsCreateOrConnectWithoutProductsInputObjectSchema).optional(),
  connect: z.lazy(() => shop_sectionsWhereUniqueInputObjectSchema).optional()
}).strict();
export const shop_sectionsCreateNestedOneWithoutProductsInputObjectSchema: z.ZodType<Prisma.shop_sectionsCreateNestedOneWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsCreateNestedOneWithoutProductsInput>;
export const shop_sectionsCreateNestedOneWithoutProductsInputObjectZodSchema = makeSchema();
