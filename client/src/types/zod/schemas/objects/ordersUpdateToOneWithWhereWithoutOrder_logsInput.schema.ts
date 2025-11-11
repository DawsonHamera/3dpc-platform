import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './ordersWhereInput.schema';
import { ordersUpdateWithoutOrder_logsInputObjectSchema as ordersUpdateWithoutOrder_logsInputObjectSchema } from './ordersUpdateWithoutOrder_logsInput.schema';
import { ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema as ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema } from './ordersUncheckedUpdateWithoutOrder_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ordersWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ordersUpdateWithoutOrder_logsInputObjectSchema), z.lazy(() => ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema)])
}).strict();
export const ordersUpdateToOneWithWhereWithoutOrder_logsInputObjectSchema: z.ZodType<Prisma.ordersUpdateToOneWithWhereWithoutOrder_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUpdateToOneWithWhereWithoutOrder_logsInput>;
export const ordersUpdateToOneWithWhereWithoutOrder_logsInputObjectZodSchema = makeSchema();
