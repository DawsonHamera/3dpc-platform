import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersCreateWithoutOrder_logsInputObjectSchema as ordersCreateWithoutOrder_logsInputObjectSchema } from './ordersCreateWithoutOrder_logsInput.schema';
import { ordersUncheckedCreateWithoutOrder_logsInputObjectSchema as ordersUncheckedCreateWithoutOrder_logsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ordersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ordersCreateWithoutOrder_logsInputObjectSchema), z.lazy(() => ordersUncheckedCreateWithoutOrder_logsInputObjectSchema)])
}).strict();
export const ordersCreateOrConnectWithoutOrder_logsInputObjectSchema: z.ZodType<Prisma.ordersCreateOrConnectWithoutOrder_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersCreateOrConnectWithoutOrder_logsInput>;
export const ordersCreateOrConnectWithoutOrder_logsInputObjectZodSchema = makeSchema();
