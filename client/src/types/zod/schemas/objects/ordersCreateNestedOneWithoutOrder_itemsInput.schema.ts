import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersCreateWithoutOrder_itemsInputObjectSchema as ordersCreateWithoutOrder_itemsInputObjectSchema } from './ordersCreateWithoutOrder_itemsInput.schema';
import { ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema as ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_itemsInput.schema';
import { ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema as ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './ordersCreateOrConnectWithoutOrder_itemsInput.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ordersCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => ordersWhereUniqueInputObjectSchema).optional()
}).strict();
export const ordersCreateNestedOneWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ordersCreateNestedOneWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersCreateNestedOneWithoutOrder_itemsInput>;
export const ordersCreateNestedOneWithoutOrder_itemsInputObjectZodSchema = makeSchema();
