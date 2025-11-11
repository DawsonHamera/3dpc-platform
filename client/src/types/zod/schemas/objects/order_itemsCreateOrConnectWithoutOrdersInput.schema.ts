import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsCreateWithoutOrdersInputObjectSchema as order_itemsCreateWithoutOrdersInputObjectSchema } from './order_itemsCreateWithoutOrdersInput.schema';
import { order_itemsUncheckedCreateWithoutOrdersInputObjectSchema as order_itemsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const order_itemsCreateOrConnectWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_itemsCreateOrConnectWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsCreateOrConnectWithoutOrdersInput>;
export const order_itemsCreateOrConnectWithoutOrdersInputObjectZodSchema = makeSchema();
