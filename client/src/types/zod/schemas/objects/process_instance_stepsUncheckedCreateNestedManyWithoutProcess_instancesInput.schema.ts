import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema as process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsCreateWithoutProcess_instancesInput.schema';
import { process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema as process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsUncheckedCreateWithoutProcess_instancesInput.schema';
import { process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema as process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './process_instance_stepsCreateOrConnectWithoutProcess_instancesInput.schema';
import { process_instance_stepsCreateManyProcess_instancesInputEnvelopeObjectSchema as process_instance_stepsCreateManyProcess_instancesInputEnvelopeObjectSchema } from './process_instance_stepsCreateManyProcess_instancesInputEnvelope.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './process_instance_stepsWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsCreateWithoutProcess_instancesInputObjectSchema).array(), z.lazy(() => process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsUncheckedCreateWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema), z.lazy(() => process_instance_stepsCreateOrConnectWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => process_instance_stepsCreateManyProcess_instancesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema), z.lazy(() => process_instance_stepsWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const process_instance_stepsUncheckedCreateNestedManyWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_instance_stepsUncheckedCreateNestedManyWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsUncheckedCreateNestedManyWithoutProcess_instancesInput>;
export const process_instance_stepsUncheckedCreateNestedManyWithoutProcess_instancesInputObjectZodSchema = makeSchema();
