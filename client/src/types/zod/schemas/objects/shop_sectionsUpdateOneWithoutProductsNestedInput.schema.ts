import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { shop_sectionsCreateWithoutProductsInputObjectSchema as shop_sectionsCreateWithoutProductsInputObjectSchema } from './shop_sectionsCreateWithoutProductsInput.schema';
import { shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema as shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema } from './shop_sectionsUncheckedCreateWithoutProductsInput.schema';
import { shop_sectionsCreateOrConnectWithoutProductsInputObjectSchema as shop_sectionsCreateOrConnectWithoutProductsInputObjectSchema } from './shop_sectionsCreateOrConnectWithoutProductsInput.schema';
import { shop_sectionsUpsertWithoutProductsInputObjectSchema as shop_sectionsUpsertWithoutProductsInputObjectSchema } from './shop_sectionsUpsertWithoutProductsInput.schema';
import { shop_sectionsWhereInputObjectSchema as shop_sectionsWhereInputObjectSchema } from './shop_sectionsWhereInput.schema';
import { shop_sectionsWhereUniqueInputObjectSchema as shop_sectionsWhereUniqueInputObjectSchema } from './shop_sectionsWhereUniqueInput.schema';
import { shop_sectionsUpdateToOneWithWhereWithoutProductsInputObjectSchema as shop_sectionsUpdateToOneWithWhereWithoutProductsInputObjectSchema } from './shop_sectionsUpdateToOneWithWhereWithoutProductsInput.schema';
import { shop_sectionsUpdateWithoutProductsInputObjectSchema as shop_sectionsUpdateWithoutProductsInputObjectSchema } from './shop_sectionsUpdateWithoutProductsInput.schema';
import { shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema as shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema } from './shop_sectionsUncheckedUpdateWithoutProductsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => shop_sectionsCreateWithoutProductsInputObjectSchema), z.lazy(() => shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => shop_sectionsCreateOrConnectWithoutProductsInputObjectSchema).optional(),
  upsert: z.lazy(() => shop_sectionsUpsertWithoutProductsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => shop_sectionsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => shop_sectionsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => shop_sectionsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => shop_sectionsUpdateToOneWithWhereWithoutProductsInputObjectSchema), z.lazy(() => shop_sectionsUpdateWithoutProductsInputObjectSchema), z.lazy(() => shop_sectionsUncheckedUpdateWithoutProductsInputObjectSchema)]).optional()
}).strict();
export const shop_sectionsUpdateOneWithoutProductsNestedInputObjectSchema: z.ZodType<Prisma.shop_sectionsUpdateOneWithoutProductsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsUpdateOneWithoutProductsNestedInput>;
export const shop_sectionsUpdateOneWithoutProductsNestedInputObjectZodSchema = makeSchema();
