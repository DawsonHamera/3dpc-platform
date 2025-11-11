import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesUpdateWithoutProcess_logsInputObjectSchema as process_instancesUpdateWithoutProcess_logsInputObjectSchema } from './process_instancesUpdateWithoutProcess_logsInput.schema';
import { process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema as process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema } from './process_instancesUncheckedUpdateWithoutProcess_logsInput.schema';
import { process_instancesCreateWithoutProcess_logsInputObjectSchema as process_instancesCreateWithoutProcess_logsInputObjectSchema } from './process_instancesCreateWithoutProcess_logsInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_logsInput.schema';
import { process_instancesWhereInputObjectSchema as process_instancesWhereInputObjectSchema } from './process_instancesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => process_instancesUpdateWithoutProcess_logsInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema)]),
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_logsInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema)]),
  where: z.lazy(() => process_instancesWhereInputObjectSchema).optional()
}).strict();
export const process_instancesUpsertWithoutProcess_logsInputObjectSchema: z.ZodType<Prisma.process_instancesUpsertWithoutProcess_logsInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpsertWithoutProcess_logsInput>;
export const process_instancesUpsertWithoutProcess_logsInputObjectZodSchema = makeSchema();
