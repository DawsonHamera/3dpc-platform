import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutProcess_instancesInputObjectSchema as tasksCreateWithoutProcess_instancesInputObjectSchema } from './tasksCreateWithoutProcess_instancesInput.schema';
import { tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema as tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './tasksUncheckedCreateWithoutProcess_instancesInput.schema';
import { tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema as tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './tasksCreateOrConnectWithoutProcess_instancesInput.schema';
import { tasksCreateManyProcess_instancesInputEnvelopeObjectSchema as tasksCreateManyProcess_instancesInputEnvelopeObjectSchema } from './tasksCreateManyProcess_instancesInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksCreateWithoutProcess_instancesInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyProcess_instancesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tasksCreateNestedManyWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.tasksCreateNestedManyWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateNestedManyWithoutProcess_instancesInput>;
export const tasksCreateNestedManyWithoutProcess_instancesInputObjectZodSchema = makeSchema();
