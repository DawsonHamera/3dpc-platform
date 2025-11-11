import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersCreateWithoutOrder_logsInputObjectSchema as ordersCreateWithoutOrder_logsInputObjectSchema } from './ordersCreateWithoutOrder_logsInput.schema';
import { ordersUncheckedCreateWithoutOrder_logsInputObjectSchema as ordersUncheckedCreateWithoutOrder_logsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_logsInput.schema';
import { ordersCreateOrConnectWithoutOrder_logsInputObjectSchema as ordersCreateOrConnectWithoutOrder_logsInputObjectSchema } from './ordersCreateOrConnectWithoutOrder_logsInput.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ordersCreateWithoutOrder_logsInputObjectSchema), z.lazy(() => ordersUncheckedCreateWithoutOrder_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ordersCreateOrConnectWithoutOrder_logsInputObjectSchema).optional(),
  connect: z.lazy(() => ordersWhereUniqueInputObjectSchema).optional()
}).strict();
export const ordersCreateNestedOneWithoutOrder_logsInputObjectSchema: z.ZodType<Prisma.ordersCreateNestedOneWithoutOrder_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersCreateNestedOneWithoutOrder_logsInput>;
export const ordersCreateNestedOneWithoutOrder_logsInputObjectZodSchema = makeSchema();
