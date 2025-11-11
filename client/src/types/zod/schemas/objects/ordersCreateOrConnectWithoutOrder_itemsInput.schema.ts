import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersCreateWithoutOrder_itemsInputObjectSchema as ordersCreateWithoutOrder_itemsInputObjectSchema } from './ordersCreateWithoutOrder_itemsInput.schema';
import { ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema as ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ordersCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema)])
}).strict();
export const ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ordersCreateOrConnectWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersCreateOrConnectWithoutOrder_itemsInput>;
export const ordersCreateOrConnectWithoutOrder_itemsInputObjectZodSchema = makeSchema();
