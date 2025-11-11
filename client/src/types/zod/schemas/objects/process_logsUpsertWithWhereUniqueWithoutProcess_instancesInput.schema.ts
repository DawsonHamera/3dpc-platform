import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './process_logsWhereUniqueInput.schema';
import { process_logsUpdateWithoutProcess_instancesInputObjectSchema as process_logsUpdateWithoutProcess_instancesInputObjectSchema } from './process_logsUpdateWithoutProcess_instancesInput.schema';
import { process_logsUncheckedUpdateWithoutProcess_instancesInputObjectSchema as process_logsUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './process_logsUncheckedUpdateWithoutProcess_instancesInput.schema';
import { process_logsCreateWithoutProcess_instancesInputObjectSchema as process_logsCreateWithoutProcess_instancesInputObjectSchema } from './process_logsCreateWithoutProcess_instancesInput.schema';
import { process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_logsUncheckedCreateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => process_logsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => process_logsUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsUncheckedUpdateWithoutProcess_instancesInputObjectSchema)]),
  create: z.union([z.lazy(() => process_logsCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const process_logsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_logsUpsertWithWhereUniqueWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUpsertWithWhereUniqueWithoutProcess_instancesInput>;
export const process_logsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectZodSchema = makeSchema();
