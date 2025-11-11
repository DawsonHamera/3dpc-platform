import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersUpdateWithoutOrder_itemsInputObjectSchema as ordersUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUpdateWithoutOrder_itemsInput.schema';
import { ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema as ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedUpdateWithoutOrder_itemsInput.schema';
import { ordersCreateWithoutOrder_itemsInputObjectSchema as ordersCreateWithoutOrder_itemsInputObjectSchema } from './ordersCreateWithoutOrder_itemsInput.schema';
import { ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema as ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_itemsInput.schema';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './ordersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ordersUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ordersCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema)]),
  where: z.lazy(() => ordersWhereInputObjectSchema).optional()
}).strict();
export const ordersUpsertWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ordersUpsertWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUpsertWithoutOrder_itemsInput>;
export const ordersUpsertWithoutOrder_itemsInputObjectZodSchema = makeSchema();
