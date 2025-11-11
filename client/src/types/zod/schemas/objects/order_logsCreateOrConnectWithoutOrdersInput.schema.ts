import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './order_logsWhereUniqueInput.schema';
import { order_logsCreateWithoutOrdersInputObjectSchema as order_logsCreateWithoutOrdersInputObjectSchema } from './order_logsCreateWithoutOrdersInput.schema';
import { order_logsUncheckedCreateWithoutOrdersInputObjectSchema as order_logsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_logsUncheckedCreateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => order_logsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => order_logsCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const order_logsCreateOrConnectWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_logsCreateOrConnectWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsCreateOrConnectWithoutOrdersInput>;
export const order_logsCreateOrConnectWithoutOrdersInputObjectZodSchema = makeSchema();
