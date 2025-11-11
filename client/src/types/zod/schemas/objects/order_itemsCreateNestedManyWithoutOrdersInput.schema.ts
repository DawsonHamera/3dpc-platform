import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsCreateWithoutOrdersInputObjectSchema as order_itemsCreateWithoutOrdersInputObjectSchema } from './order_itemsCreateWithoutOrdersInput.schema';
import { order_itemsUncheckedCreateWithoutOrdersInputObjectSchema as order_itemsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateWithoutOrdersInput.schema';
import { order_itemsCreateOrConnectWithoutOrdersInputObjectSchema as order_itemsCreateOrConnectWithoutOrdersInputObjectSchema } from './order_itemsCreateOrConnectWithoutOrdersInput.schema';
import { order_itemsCreateManyOrdersInputEnvelopeObjectSchema as order_itemsCreateManyOrdersInputEnvelopeObjectSchema } from './order_itemsCreateManyOrdersInputEnvelope.schema';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema).array(), z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => order_itemsCreateOrConnectWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsCreateOrConnectWithoutOrdersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => order_itemsCreateManyOrdersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => order_itemsWhereUniqueInputObjectSchema), z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const order_itemsCreateNestedManyWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_itemsCreateNestedManyWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsCreateNestedManyWithoutOrdersInput>;
export const order_itemsCreateNestedManyWithoutOrdersInputObjectZodSchema = makeSchema();
