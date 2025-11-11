import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instancesCreateWithoutProcess_logsInputObjectSchema as process_instancesCreateWithoutProcess_logsInputObjectSchema } from './process_instancesCreateWithoutProcess_logsInput.schema';
import { process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema as process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema } from './process_instancesUncheckedCreateWithoutProcess_logsInput.schema';
import { process_instancesCreateOrConnectWithoutProcess_logsInputObjectSchema as process_instancesCreateOrConnectWithoutProcess_logsInputObjectSchema } from './process_instancesCreateOrConnectWithoutProcess_logsInput.schema';
import { process_instancesUpsertWithoutProcess_logsInputObjectSchema as process_instancesUpsertWithoutProcess_logsInputObjectSchema } from './process_instancesUpsertWithoutProcess_logsInput.schema';
import { process_instancesWhereUniqueInputObjectSchema as process_instancesWhereUniqueInputObjectSchema } from './process_instancesWhereUniqueInput.schema';
import { process_instancesUpdateToOneWithWhereWithoutProcess_logsInputObjectSchema as process_instancesUpdateToOneWithWhereWithoutProcess_logsInputObjectSchema } from './process_instancesUpdateToOneWithWhereWithoutProcess_logsInput.schema';
import { process_instancesUpdateWithoutProcess_logsInputObjectSchema as process_instancesUpdateWithoutProcess_logsInputObjectSchema } from './process_instancesUpdateWithoutProcess_logsInput.schema';
import { process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema as process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema } from './process_instancesUncheckedUpdateWithoutProcess_logsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instancesCreateWithoutProcess_logsInputObjectSchema), z.lazy(() => process_instancesUncheckedCreateWithoutProcess_logsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => process_instancesCreateOrConnectWithoutProcess_logsInputObjectSchema).optional(),
  upsert: z.lazy(() => process_instancesUpsertWithoutProcess_logsInputObjectSchema).optional(),
  connect: z.lazy(() => process_instancesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => process_instancesUpdateToOneWithWhereWithoutProcess_logsInputObjectSchema), z.lazy(() => process_instancesUpdateWithoutProcess_logsInputObjectSchema), z.lazy(() => process_instancesUncheckedUpdateWithoutProcess_logsInputObjectSchema)]).optional()
}).strict();
export const process_instancesUpdateOneRequiredWithoutProcess_logsNestedInputObjectSchema: z.ZodType<Prisma.process_instancesUpdateOneRequiredWithoutProcess_logsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesUpdateOneRequiredWithoutProcess_logsNestedInput>;
export const process_instancesUpdateOneRequiredWithoutProcess_logsNestedInputObjectZodSchema = makeSchema();
