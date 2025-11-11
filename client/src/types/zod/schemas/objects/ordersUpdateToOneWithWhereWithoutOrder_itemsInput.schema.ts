import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './ordersWhereInput.schema';
import { ordersUpdateWithoutOrder_itemsInputObjectSchema as ordersUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUpdateWithoutOrder_itemsInput.schema';
import { ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema as ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedUpdateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ordersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ordersUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema)])
}).strict();
export const ordersUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema: z.ZodType<Prisma.ordersUpdateToOneWithWhereWithoutOrder_itemsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUpdateToOneWithWhereWithoutOrder_itemsInput>;
export const ordersUpdateToOneWithWhereWithoutOrder_itemsInputObjectZodSchema = makeSchema();
