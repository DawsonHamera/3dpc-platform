import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsWhereUniqueInputObjectSchema as order_logsWhereUniqueInputObjectSchema } from './order_logsWhereUniqueInput.schema';
import { order_logsUpdateWithoutOrdersInputObjectSchema as order_logsUpdateWithoutOrdersInputObjectSchema } from './order_logsUpdateWithoutOrdersInput.schema';
import { order_logsUncheckedUpdateWithoutOrdersInputObjectSchema as order_logsUncheckedUpdateWithoutOrdersInputObjectSchema } from './order_logsUncheckedUpdateWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => order_logsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => order_logsUpdateWithoutOrdersInputObjectSchema), z.lazy(() => order_logsUncheckedUpdateWithoutOrdersInputObjectSchema)])
}).strict();
export const order_logsUpdateWithWhereUniqueWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_logsUpdateWithWhereUniqueWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsUpdateWithWhereUniqueWithoutOrdersInput>;
export const order_logsUpdateWithWhereUniqueWithoutOrdersInputObjectZodSchema = makeSchema();
