import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersUpdateWithoutOrder_logsInputObjectSchema as ordersUpdateWithoutOrder_logsInputObjectSchema } from './ordersUpdateWithoutOrder_logsInput.schema';
import { ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema as ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema } from './ordersUncheckedUpdateWithoutOrder_logsInput.schema';
import { ordersCreateWithoutOrder_logsInputObjectSchema as ordersCreateWithoutOrder_logsInputObjectSchema } from './ordersCreateWithoutOrder_logsInput.schema';
import { ordersUncheckedCreateWithoutOrder_logsInputObjectSchema as ordersUncheckedCreateWithoutOrder_logsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_logsInput.schema';
import { ordersWhereInputObjectSchema as ordersWhereInputObjectSchema } from './ordersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ordersUpdateWithoutOrder_logsInputObjectSchema), z.lazy(() => ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema)]),
  create: z.union([z.lazy(() => ordersCreateWithoutOrder_logsInputObjectSchema), z.lazy(() => ordersUncheckedCreateWithoutOrder_logsInputObjectSchema)]),
  where: z.lazy(() => ordersWhereInputObjectSchema).optional()
}).strict();
export const ordersUpsertWithoutOrder_logsInputObjectSchema: z.ZodType<Prisma.ordersUpsertWithoutOrder_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUpsertWithoutOrder_logsInput>;
export const ordersUpsertWithoutOrder_logsInputObjectZodSchema = makeSchema();
