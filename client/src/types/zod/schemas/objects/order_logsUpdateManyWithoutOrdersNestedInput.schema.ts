import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsCreateWithoutOrdersInputObjectSchema as order_logsCreateWithoutOrdersInputObjectSchema } from './order_logsCreateWithoutOrdersInput.schema';
import { order_logsUncheckedCreateWithoutOrdersInputObjectSchema as order_logsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_logsUncheckedCreateWithoutOrdersInput.schema';
import { order_logsCreateOrConnectWithoutOrdersInputObjectSchema as order_logsCreateOrConnectWithoutOrdersInputObjectSchema } from './order_logsCreateOrConnectWithoutOrdersInput.schema';
import { order_logsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema as order_logsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema } from './order_logsUpsertWithWhereUniqueWithoutOrdersInput.schema';
import { order_logsCreateManyOrdersInputEnvelopeObjectSchema as order_logsCreateManyOrdersInputEnvelopeObjectSchema } from './order_logsCreateManyOrdersInputEnvelope.schema';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './order_logsWhereUniqueInput.schema';
import { order_logsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema as order_logsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema } from './order_logsUpdateWithWhereUniqueWithoutOrdersInput.schema';
import { order_logsUpdateManyWithWhereWithoutOrdersInputObjectSchema as order_logsUpdateManyWithWhereWithoutOrdersInputObjectSchema } from './order_logsUpdateManyWithWhereWithoutOrdersInput.schema';
import { order_logsScalarWhereInputObjectSchema as order_logsScalarWhereInputObjectSchema } from './order_logsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => order_logsCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_logsCreateWithoutOrdersInputObjectSchema).array(), z.lazy(() => order_logsUncheckedCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUncheckedCreateWithoutOrdersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => order_logsCreateOrConnectWithoutOrdersInputObjectSchema), z.lazy(() => order_logsCreateOrConnectWithoutOrdersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => order_logsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => order_logsCreateManyOrdersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => order_logsWhereUniqueInputObjectSchema), z.lazy(() => order_logsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => order_logsWhereUniqueInputObjectSchema), z.lazy(() => order_logsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => order_logsWhereUniqueInputObjectSchema), z.lazy(() => order_logsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => order_logsWhereUniqueInputObjectSchema), z.lazy(() => order_logsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => order_logsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => order_logsUpdateManyWithWhereWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUpdateManyWithWhereWithoutOrdersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => order_logsScalarWhereInputObjectSchema), z.lazy(() => order_logsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const order_logsUpdateManyWithoutOrdersNestedInputObjectSchema: z.ZodType<Prisma.order_logsUpdateManyWithoutOrdersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsUpdateManyWithoutOrdersNestedInput>;
export const order_logsUpdateManyWithoutOrdersNestedInputObjectZodSchema = makeSchema();
