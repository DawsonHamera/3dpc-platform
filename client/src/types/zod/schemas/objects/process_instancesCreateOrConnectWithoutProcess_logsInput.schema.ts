import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesCreateWithoutProcess_logsInputObjectSchema as process_instancesCreateWithoutProcess_logsInputObjectSchema } from './process_instancesCreateWithoutProcess_logsInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_logsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_instancesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_logsInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema)])
}).strict();
export const process_instancesCreateOrConnectWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.process_instancesCreateOrConnectWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesCreateOrConnectWithoutProcess_logsInput>;
export const process_instancesCreateOrConnectWithoutProcess_logsInputObjectZodSchema = makeSchema();
