import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_itemsCreateWithoutOrdersInputObjectSchema as order_itemsCreateWithoutOrdersInputObjectSchema } from './order_itemsCreateWithoutOrdersInput.schema';
import { order_itemsUncheckedCreateWithoutOrdersInputObjectSchema as order_itemsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_itemsUncheckedCreateWithoutOrdersInput.schema';
import { order_itemsCreateOrConnectWithoutOrdersInputObjectSchema as order_itemsCreateOrConnectWithoutOrdersInputObjectSchema } from './order_itemsCreateOrConnectWithoutOrdersInput.schema';
import { order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema as order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema } from './order_itemsUpsertWithWhereUniqueWithoutOrdersInput.schema';
import { order_itemsCreateManyOrdersInputEnvelopeObjectSchema as order_itemsCreateManyOrdersInputEnvelopeObjectSchema } from './order_itemsCreateManyOrdersInputEnvelope.schema';
import { order_itemsWhereUniqueInputObjectSchema as order_itemsWhereUniqueInputObjectSchema } from './order_itemsWhereUniqueInput.schema';
import { order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema as order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema } from './order_itemsUpdateWithWhereUniqueWithoutOrdersInput.schema';
import { order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema as order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema } from './order_itemsUpdateManyWithWhereWithoutOrdersInput.schema';
import { order_itemsScalarWhereInputObjectSchema as order_itemsScalarWhereInputObjectSchema } from './order_itemsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsCreateWithoutOrdersInputObjectSchema).array(), z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUncheckedCreateWithoutOrdersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => order_itemsCreateOrConnectWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsCreateOrConnectWithoutOrdersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => order_itemsCreateManyOrdersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => order_itemsWhereUniqueInputObjectSchema), z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => order_itemsWhereUniqueInputObjectSchema), z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => order_itemsWhereUniqueInputObjectSchema), z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => order_itemsWhereUniqueInputObjectSchema), z.lazy(() => order_itemsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema), z.lazy(() => order_itemsUpdateManyWithWhereWithoutOrdersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => order_itemsScalarWhereInputObjectSchema), z.lazy(() => order_itemsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const order_itemsUpdateManyWithoutOrdersNestedInputObjectSchema: z.ZodType<Prisma.order_itemsUpdateManyWithoutOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsUpdateManyWithoutOrdersNestedInput>;
export const order_itemsUpdateManyWithoutOrdersNestedInputObjectZodSchema = makeSchema();
