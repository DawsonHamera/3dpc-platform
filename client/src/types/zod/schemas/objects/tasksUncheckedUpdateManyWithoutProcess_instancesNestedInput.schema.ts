import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutProcess_instancesInputObjectSchema as tasksCreateWithoutProcess_instancesInputObjectSchema } from './tasksCreateWithoutProcess_instancesInput.schema';
import { tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema as tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './tasksUncheckedCreateWithoutProcess_instancesInput.schema';
import { tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema as tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema } from './tasksCreateOrConnectWithoutProcess_instancesInput.schema';
import { tasksUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema as tasksUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema } from './tasksUpsertWithWhereUniqueWithoutProcess_instancesInput.schema';
import { tasksCreateManyProcess_instancesInputEnvelopeObjectSchema as tasksCreateManyProcess_instancesInputEnvelopeObjectSchema } from './tasksCreateManyProcess_instancesInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema as tasksUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema } from './tasksUpdateWithWhereUniqueWithoutProcess_instancesInput.schema';
import { tasksUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema as tasksUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema } from './tasksUpdateManyWithWhereWithoutProcess_instancesInput.schema';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksCreateWithoutProcess_instancesInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tasksUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyProcess_instancesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tasksUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tasksUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tasksScalarWhereInputObjectSchema), z.lazy(() => tasksScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tasksUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectSchema: z.ZodType<Prisma.tasksUncheckedUpdateManyWithoutProcess_instancesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUncheckedUpdateManyWithoutProcess_instancesNestedInput>;
export const tasksUncheckedUpdateManyWithoutProcess_instancesNestedInputObjectZodSchema = makeSchema();
