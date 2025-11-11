import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsCreateWithoutOrdersInputObjectSchema as order_logsCreateWithoutOrdersInputObjectSchema } from './order_logsCreateWithoutOrdersInput.schema';
import { order_logsUncheckedCreateWithoutOrdersInputObjectSchema as order_logsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_logsUncheckedCreateWithoutOrdersInput.schema';
import { order_logsCreateOrConnectWithoutOrdersInputObjectSchema as order_logsCreateOrConnectWithoutOrdersInputObjectSchema } from './order_logsCreateOrConnectWithoutOrdersInput.schema';
import { order_logsCreateManyOrdersInputEnvelopeObjectSchema as order_logsCreateManyOrdersInputEnvelopeObjectSchema } from './order_logsCreateManyOrdersInputEnvelope.schema';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './order_logsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => order_logsCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_logsCreateWithoutOrdersInputObjectSchema).array(), z.lazy(() => order_logsUncheckedCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUncheckedCreateWithoutOrdersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => order_logsCreateOrConnectWithoutOrdersInputObjectSchema), z.lazy(() => order_logsCreateOrConnectWithoutOrdersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => order_logsCreateManyOrdersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => order_logsWhereUniqueInputObjectSchema), z.lazy(() => order_logsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const order_logsCreateNestedManyWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_logsCreateNestedManyWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsCreateNestedManyWithoutOrdersInput>;
export const order_logsCreateNestedManyWithoutOrdersInputObjectZodSchema = makeSchema();
