import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logsCreateWithoutProcess_instancesInputObjectSchema as process_logsCreateWithoutProcess_instancesInputObjectSchema } from './process_logsCreateWithoutProcess_instancesInput.schema';
import { process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_logsUncheckedCreateWithoutProcess_instancesInput.schema';
import { process_logsCreateOrConnectWithoutProcess_instancesInputObjectSchema as process_logsCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './process_logsCreateOrConnectWithoutProcess_instancesInput.schema';
import { process_logsCreateManyProcess_instancesInputEnvelopeObjectSchema as process_logsCreateManyProcess_instancesInputEnvelopeObjectSchema } from './process_logsCreateManyProcess_instancesInputEnvelope.schema';
import { process_logsWhereUniqueInputObjectSchema as process_logsWhereUniqueInputObjectSchema } from './process_logsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_logsCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsCreateWithoutProcess_instancesInputObjectSchema).array(), z.lazy(() => process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsUncheckedCreateWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_logsCreateOrConnectWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_logsCreateOrConnectWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_logsCreateManyProcess_instancesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_logsWhereUniqueInputObjectSchema), z.lazy(() => process_logsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_logsCreateNestedManyWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_logsCreateNestedManyWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsCreateNestedManyWithoutProcess_instancesInput>;
export const process_logsCreateNestedManyWithoutProcess_instancesInputObjectZodSchema = makeSchema();
