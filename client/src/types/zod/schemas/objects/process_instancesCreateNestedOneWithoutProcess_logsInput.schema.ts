import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutProcess_logsInputObjectSchema as process_instancesCreateWithoutProcess_logsInputObjectSchema } from './process_instancesCreateWithoutProcess_logsInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_logsInput.schema';
import { process_instancesCreateOrConnectWithoutProcess_logsInputObjectSchema as process_instancesCreateOrConnectWithoutProcess_logsInputObjectSchema } from './process_instancesCreateOrConnectWithoutProcess_logsInput.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_logsInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_instancesCreateOrConnectWithoutProcess_logsInputObjectSchema).optional(),
  connect: z.lazy(() => process_instancesWhereUniqueInputObjectSchema).optional()
}).strict();
export const process_instancesCreateNestedOneWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.process_instancesCreateNestedOneWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateNestedOneWithoutProcess_logsInput>;
export const process_instancesCreateNestedOneWithoutProcess_logsInputObjectZodSchema = makeSchema();
