import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ordersCreateWithoutOrder_logsInputObjectSchema as ordersCreateWithoutOrder_logsInputObjectSchema } from './ordersCreateWithoutOrder_logsInput.schema';
import { ordersUncheckedCreateWithoutOrder_logsInputObjectSchema as ordersUncheckedCreateWithoutOrder_logsInputObjectSchema } from './ordersUncheckedCreateWithoutOrder_logsInput.schema';
import { ordersCreateOrConnectWithoutOrder_logsInputObjectSchema as ordersCreateOrConnectWithoutOrder_logsInputObjectSchema } from './ordersCreateOrConnectWithoutOrder_logsInput.schema';
import { ordersUpsertWithoutOrder_logsInputObjectSchema as ordersUpsertWithoutOrder_logsInputObjectSchema } from './ordersUpsertWithoutOrder_logsInput.schema';
import { ordersWhereUniqueInputObjectSchema as ordersWhereUniqueInputObjectSchema } from './ordersWhereUniqueInput.schema';
import { ordersUpdateToOneWithWhereWithoutOrder_logsInputObjectSchema as ordersUpdateToOneWithWhereWithoutOrder_logsInputObjectSchema } from './ordersUpdateToOneWithWhereWithoutOrder_logsInput.schema';
import { ordersUpdateWithoutOrder_logsInputObjectSchema as ordersUpdateWithoutOrder_logsInputObjectSchema } from './ordersUpdateWithoutOrder_logsInput.schema';
import { ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema as ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema } from './ordersUncheckedUpdateWithoutOrder_logsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ordersCreateWithoutOrder_logsInputObjectSchema), z.lazy(() => ordersUncheckedCreateWithoutOrder_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ordersCreateOrConnectWithoutOrder_logsInputObjectSchema).optional(),
  upsert: z.lazy(() => ordersUpsertWithoutOrder_logsInputObjectSchema).optional(),
  connect: z.lazy(() => ordersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ordersUpdateToOneWithWhereWithoutOrder_logsInputObjectSchema), z.lazy(() => ordersUpdateWithoutOrder_logsInputObjectSchema), z.lazy(() => ordersUncheckedUpdateWithoutOrder_logsInputObjectSchema)]).optional()
}).strict();
export const ordersUpdateOneRequiredWithoutOrder_logsNestedInputObjectSchema: z.ZodType<Prisma.ordersUpdateOneRequiredWithoutOrder_logsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersUpdateOneRequiredWithoutOrder_logsNestedInput>;
export const ordersUpdateOneRequiredWithoutOrder_logsNestedInputObjectZodSchema = makeSchema();
