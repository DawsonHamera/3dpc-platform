import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { order_logsScalarWhereInputObjectSchema as order_logsScalarWhereInputObjectSchema } from './order_logsScalarWhereInput.schema';
import { order_logsUpdateManyMutationInputObjectSchema as order_logsUpdateManyMutationInputObjectSchema } from './order_logsUpdateManyMutationInput.schema';
import { order_logsUncheckedUpdateManyWithoutOrdersInputObjectSchema as order_logsUncheckedUpdateManyWithoutOrdersInputObjectSchema } from './order_logsUncheckedUpdateManyWithoutOrdersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => order_logsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => order_logsUpdateManyMutationInputObjectSchema), z.lazy(() => order_logsUncheckedUpdateManyWithoutOrdersInputObjectSchema)])
}).strict();
export const order_logsUpdateManyWithWhereWithoutOrdersInputObjectSchema: z.ZodType<Prisma.order_logsUpdateManyWithWhereWithoutOrdersInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsUpdateManyWithWhereWithoutOrdersInput>;
export const order_logsUpdateManyWithWhereWithoutOrdersInputObjectZodSchema = makeSchema();
