import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutRequestsInputObjectSchema as tasksCreateWithoutRequestsInputObjectSchema } from './tasksCreateWithoutRequestsInput.schema';
import { tasksUncheckedCreateWithoutRequestsInputObjectSchema as tasksUncheckedCreateWithoutRequestsInputObjectSchema } from './tasksUncheckedCreateWithoutRequestsInput.schema';
import { tasksCreateOrConnectWithoutRequestsInputObjectSchema as tasksCreateOrConnectWithoutRequestsInputObjectSchema } from './tasksCreateOrConnectWithoutRequestsInput.schema';
import { tasksUpsertWithWhereUniqueWithoutRequestsInputObjectSchema as tasksUpsertWithWhereUniqueWithoutRequestsInputObjectSchema } from './tasksUpsertWithWhereUniqueWithoutRequestsInput.schema';
import { tasksCreateManyRequestsInputEnvelopeObjectSchema as tasksCreateManyRequestsInputEnvelopeObjectSchema } from './tasksCreateManyRequestsInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithWhereUniqueWithoutRequestsInputObjectSchema as tasksUpdateWithWhereUniqueWithoutRequestsInputObjectSchema } from './tasksUpdateWithWhereUniqueWithoutRequestsInput.schema';
import { tasksUpdateManyWithWhereWithoutRequestsInputObjectSchema as tasksUpdateManyWithWhereWithoutRequestsInputObjectSchema } from './tasksUpdateManyWithWhereWithoutRequestsInput.schema';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutRequestsInputObjectSchema), z.lazy(() => tasksCreateWithoutRequestsInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutRequestsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutRequestsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutRequestsInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutRequestsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tasksUpsertWithWhereUniqueWithoutRequestsInputObjectSchema), z.lazy(() => tasksUpsertWithWhereUniqueWithoutRequestsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyRequestsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tasksUpdateWithWhereUniqueWithoutRequestsInputObjectSchema), z.lazy(() => tasksUpdateWithWhereUniqueWithoutRequestsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tasksUpdateManyWithWhereWithoutRequestsInputObjectSchema), z.lazy(() => tasksUpdateManyWithWhereWithoutRequestsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tasksScalarWhereInputObjectSchema), z.lazy(() => tasksScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tasksUpdateManyWithoutRequestsNestedInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithoutRequestsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithoutRequestsNestedInput>;
export const tasksUpdateManyWithoutRequestsNestedInputObjectZodSchema = makeSchema();
