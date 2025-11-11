import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsUpdateWithoutOrdersInputObjectSchema as order_itemsUpdateWithoutOrdersInputObjectSchema } from './order_itemsUpdateWithoutOrdersInput.schema';
import { order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema as order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedUpdateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => order_itemsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => order_itemsUpdateWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUncheckedUpdateWithoutOrdersInputObjectSchema)])
}).strict();
export const order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsUpdateWithWhereUniqueWithoutOrdersInput>;
export const order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectZodSchema = makeSchema();
