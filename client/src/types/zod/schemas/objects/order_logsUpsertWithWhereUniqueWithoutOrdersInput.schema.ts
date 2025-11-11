import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './order_logsWhereUniqueInput.schema';
import { order_logsUpdateWithoutOrdersInputObjectSchema as order_logsUpdateWithoutOrdersInputObjectSchema } from './order_logsUpdateWithoutOrdersInput.schema';
import { order_logsUncheckedUpdateWithoutOrdersInputObjectSchema as order_logsUncheckedUpdateWithoutOrdersInputObjectSchema } from './order_logsUncheckedUpdateWithoutOrdersInput.schema';
import { order_logsCreateWithoutOrdersInputObjectSchema as order_logsCreateWithoutOrdersInputObjectSchema } from './order_logsCreateWithoutOrdersInput.schema';
import { order_logsUncheckedCreateWithoutOrdersInputObjectSchema as order_logsUncheckedCreateWithoutOrdersInputObjectSchema } from './order_logsUncheckedCreateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => order_logsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => order_logsUpdateWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUncheckedUpdateWithoutOrdersInputObjectSchema)]),
  create: z.union([z.lazy(() => order_logsCreateWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUncheckedCreateWithoutOrdersInputObjectSchema)])
}).strict();
export const order_logsUpsertWithWhereUniqueWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_logsUpsertWithWhereUniqueWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsUpsertWithWhereUniqueWithoutOrdersInput>;
export const order_logsUpsertWithWhereUniqueWithoutOrdersInputObjectZodSchema = makeSchema();
