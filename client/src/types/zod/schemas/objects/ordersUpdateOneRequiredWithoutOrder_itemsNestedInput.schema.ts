import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersCreateWithoutOrder_itemsInputObjectSchema as ordersCreateWithoutOrder_itemsInputObjectSchema } from './ordersCreateWithoutOrder_itemsInput.schema';
import { ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema as ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_itemsInput.schema';
import { ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema as ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema } from './ordersCreateOrConnectWithoutOrder_itemsInput.schema';
import { ordersUpsertWithoutOrder_itemsInputObjectSchema as ordersUpsertWithoutOrder_itemsInputObjectSchema } from './ordersUpsertWithoutOrder_itemsInput.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema as ordersUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema } from './ordersUpdateToOneWithWhereWithoutOrder_itemsInput.schema';
import { ordersUpdateWithoutOrder_itemsInputObjectSchema as ordersUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUpdateWithoutOrder_itemsInput.schema';
import { ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema as ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema } from './ordersUncheckedUpdateWithoutOrder_itemsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ordersCreateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ordersUncheckedCreateWithoutOrder_itemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ordersCreateOrConnectWithoutOrder_itemsInputObjectSchema).optional(),
  upsert: z.lazy(() => ordersUpsertWithoutOrder_itemsInputObjectSchema).optional(),
  connect: z.lazy(() => ordersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ordersUpdateToOneWithWhereWithoutOrder_itemsInputObjectSchema), z.lazy(() => ordersUpdateWithoutOrder_itemsInputObjectSchema), z.lazy(() => ordersUncheckedUpdateWithoutOrder_itemsInputObjectSchema)]).optional()
}).strict();
export const ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectSchema: z.ZodType<Prisma.ordersUpdateOneRequiredWithoutOrder_itemsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUpdateOneRequiredWithoutOrder_itemsNestedInput>;
export const ordersUpdateOneRequiredWithoutOrder_itemsNestedInputObjectZodSchema = makeSchema();
