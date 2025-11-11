import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsUpdateWithoutOrdersInputObjectSchema as order_itemsUpdateWithoutOrdersInputObjectSchema } from './order_itemsUpdateWithoutOrdersInput.schema';
import { order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema as order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedUpdateWithoutOrdersInput.schema';
import { order_itemsCreateWithoutOrdersInputObjectSchema as order_itemsCreateWithoutOrdersInputObjectSchema } from './order_itemsCreateWithoutOrdersInput.schema';
import { order_itemsUncheckedCreateWithoutOrdersInputObjectSchema as order_itemsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => order_itemsUpdateWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsUpsertWithWhereUniqueWithoutOrdersInput>;
export const order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectZodSchema = makeSchema();
