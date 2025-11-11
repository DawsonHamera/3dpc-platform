import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsCreateWithoutProcess_instancesInputObjectSchema as process_logsCreateWithoutProcess_instancesInputObjectSchema } from './process_logsCreateWithoutProcess_instancesInput.schema';
import { process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_logsUncheckedCreateWithoutProcess_instancesInput.schema';
import { process_logsCreateOrConnectWithoutProcess_instancesInputObjectSchema as process_logsCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './process_logsCreateOrConnectWithoutProcess_instancesInput.schema';
import { process_logsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema as process_logsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema } from './process_logsUpsertWithWhereUniqueWithoutProcess_instancesInput.schema';
import { process_logsCreateManyProcess_instancesInputEnvelopeObjectSchema as process_logsCreateManyProcess_instancesInputEnvelopeObjectSchema } from './process_logsCreateManyProcess_instancesInputEnvelope.schema';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './process_logsWhereUniqueInput.schema';
import { process_logsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema as process_logsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema } from './process_logsUpdateWithWhereUniqueWithoutProcess_instancesInput.schema';
import { process_logsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema as process_logsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema } from './process_logsUpdateManyWithWhereWithoutProcess_instancesInput.schema';
import { process_logsScalarWhereInputObjectSchema as process_logsScalarWhereInputObjectSchema } from './process_logsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_logsCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsCreateWithoutProcess_instancesInputObjectSchema).array(), z.lazy(() => process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_logsCreateOrConnectWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsCreateOrConnectWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => process_logsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_logsCreateManyProcess_instancesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => process_logsWhereUniqueInputObjectSchema), z.lazy(() => process_logsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => process_logsWhereUniqueInputObjectSchema), z.lazy(() => process_logsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => process_logsWhereUniqueInputObjectSchema), z.lazy(() => process_logsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => process_logsWhereUniqueInputObjectSchema), z.lazy(() => process_logsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => process_logsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => process_logsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => process_logsScalarWhereInputObjectSchema), z.lazy(() => process_logsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const process_logsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema: z.ZodType<Prisma.process_logsUncheckedUpdateManyWithoutProcess_instancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUncheckedUpdateManyWithoutProcess_instancesNestedInput>;
export const process_logsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectZodSchema = makeSchema();
