import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsScalarWhereInputObjectSchema as order_itemsScalarWhereInputObjectSchema } from './order_itemsScalarWhereInput.schema';
import { order_itemsUpdateManyMutationInputObjectSchema as order_itemsUpdateManyMutationInputObjectSchema } from './order_itemsUpdateManyMutationInput.schema';
import { order_itemsUncheckedUpdateManyWithoutOrdersInputObjectSchema as order_itemsUncheckedUpdateManyWithoutOrdersInputObjectSchema } from './order_itemsUncheckedUpdateManyWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => order_itemsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => order_itemsUpdateManyMutationInputObjectSchema), z.lazy(() => order_itemsUncheckedUpdateManyWithoutOrdersInputObjectSchema)])
}).strict();
export const order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsUpdateManyWithWhereWithoutOrdersInput>;
export const order_itemsUpdateManyWithWhereWithoutOrdersInputObjectZodSchema = makeSchema();
