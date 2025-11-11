import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutTask_statusesInputObjectSchema as tasksCreateWithoutTask_statusesInputObjectSchema } from './tasksCreateWithoutTask_statusesInput.schema';
import { tasksUncheckedCreateWithoutTask_statusesInputObjectSchema as tasksUncheckedCreateWithoutTask_statusesInputObjectSchema } from './tasksUncheckedCreateWithoutTask_statusesInput.schema';
import { tasksCreateOrConnectWithoutTask_statusesInputObjectSchema as tasksCreateOrConnectWithoutTask_statusesInputObjectSchema } from './tasksCreateOrConnectWithoutTask_statusesInput.schema';
import { tasksCreateManyTask_statusesInputEnvelopeObjectSchema as tasksCreateManyTask_statusesInputEnvelopeObjectSchema } from './tasksCreateManyTask_statusesInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksCreateWithoutTask_statusesInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutTask_statusesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutTask_statusesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyTask_statusesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tasksUncheckedCreateNestedManyWithoutTask_statusesInputObjectSchema: z.ZodType<Prisma.tasksUncheckedCreateNestedManyWithoutTask_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUncheckedCreateNestedManyWithoutTask_statusesInput>;
export const tasksUncheckedCreateNestedManyWithoutTask_statusesInputObjectZodSchema = makeSchema();
