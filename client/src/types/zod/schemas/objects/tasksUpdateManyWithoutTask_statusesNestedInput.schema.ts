import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutTask_statusesInputObjectSchema as tasksCreateWithoutTask_statusesInputObjectSchema } from './tasksCreateWithoutTask_statusesInput.schema';
import { tasksUncheckedCreateWithoutTask_statusesInputObjectSchema as tasksUncheckedCreateWithoutTask_statusesInputObjectSchema } from './tasksUncheckedCreateWithoutTask_statusesInput.schema';
import { tasksCreateOrConnectWithoutTask_statusesInputObjectSchema as tasksCreateOrConnectWithoutTask_statusesInputObjectSchema } from './tasksCreateOrConnectWithoutTask_statusesInput.schema';
import { tasksUpsertWithWhereUniqueWithoutTask_statusesInputObjectSchema as tasksUpsertWithWhereUniqueWithoutTask_statusesInputObjectSchema } from './tasksUpsertWithWhereUniqueWithoutTask_statusesInput.schema';
import { tasksCreateManyTask_statusesInputEnvelopeObjectSchema as tasksCreateManyTask_statusesInputEnvelopeObjectSchema } from './tasksCreateManyTask_statusesInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithWhereUniqueWithoutTask_statusesInputObjectSchema as tasksUpdateWithWhereUniqueWithoutTask_statusesInputObjectSchema } from './tasksUpdateWithWhereUniqueWithoutTask_statusesInput.schema';
import { tasksUpdateManyWithWhereWithoutTask_statusesInputObjectSchema as tasksUpdateManyWithWhereWithoutTask_statusesInputObjectSchema } from './tasksUpdateManyWithWhereWithoutTask_statusesInput.schema';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksCreateWithoutTask_statusesInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutTask_statusesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutTask_statusesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tasksUpsertWithWhereUniqueWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUpsertWithWhereUniqueWithoutTask_statusesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyTask_statusesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tasksUpdateWithWhereUniqueWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUpdateWithWhereUniqueWithoutTask_statusesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tasksUpdateManyWithWhereWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUpdateManyWithWhereWithoutTask_statusesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tasksScalarWhereInputObjectSchema), z.lazy(() => tasksScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tasksUpdateManyWithoutTask_statusesNestedInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithoutTask_statusesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithoutTask_statusesNestedInput>;
export const tasksUpdateManyWithoutTask_statusesNestedInputObjectZodSchema = makeSchema();
