import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema as process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsCreateWithoutProcess_instancesInput.schema';
import { process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutProcess_instancesInput.schema';
import { process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema as process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsCreateOrConnectWithoutProcess_instancesInput.schema';
import { process_instance_stepsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema as process_instance_stepsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUpsertWithWhereUniqueWithoutProcess_instancesInput.schema';
import { process_instance_stepsCreateManyProcess_instancesInputEnvelopeObjectSchema as process_instance_stepsCreateManyProcess_instancesInputEnvelopeObjectSchema } from './process_instance_stepsCreateManyProcess_instancesInputEnvelope.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema';
import { process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema as process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInput.schema';
import { process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema as process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInput.schema';
import { process_instance_stepsScalarWhereInputObjectSchema as process_instance_stepsScalarWhereInputObjectSchema } from './process_instance_stepsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema).array(), z.lazy(() => process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => process_instance_stepsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instance_stepsCreateManyProcess_instancesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema), z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesNestedInput>;
export const process_instance_stepsUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectZodSchema = makeSchema();
