import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutUsersInputObjectSchema as tasksCreateWithoutUsersInputObjectSchema } from './tasksCreateWithoutUsersInput.schema';
import { tasksUncheckedCreateWithoutUsersInputObjectSchema as tasksUncheckedCreateWithoutUsersInputObjectSchema } from './tasksUncheckedCreateWithoutUsersInput.schema';
import { tasksCreateOrConnectWithoutUsersInputObjectSchema as tasksCreateOrConnectWithoutUsersInputObjectSchema } from './tasksCreateOrConnectWithoutUsersInput.schema';
import { tasksUpsertWithWhereUniqueWithoutUsersInputObjectSchema as tasksUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './tasksUpsertWithWhereUniqueWithoutUsersInput.schema';
import { tasksCreateManyUsersInputEnvelopeObjectSchema as tasksCreateManyUsersInputEnvelopeObjectSchema } from './tasksCreateManyUsersInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithWhereUniqueWithoutUsersInputObjectSchema as tasksUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './tasksUpdateWithWhereUniqueWithoutUsersInput.schema';
import { tasksUpdateManyWithWhereWithoutUsersInputObjectSchema as tasksUpdateManyWithWhereWithoutUsersInputObjectSchema } from './tasksUpdateManyWithWhereWithoutUsersInput.schema';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutUsersInputObjectSchema), z.lazy(() => tasksCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tasksUpsertWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => tasksUpsertWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyUsersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tasksUpdateWithWhereUniqueWithoutUsersInputObjectSchema), z.lazy(() => tasksUpdateWithWhereUniqueWithoutUsersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tasksUpdateManyWithWhereWithoutUsersInputObjectSchema), z.lazy(() => tasksUpdateManyWithWhereWithoutUsersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tasksScalarWhereInputObjectSchema), z.lazy(() => tasksScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tasksUpdateManyWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithoutUsersNestedInput>;
export const tasksUpdateManyWithoutUsersNestedInputObjectZodSchema = makeSchema();
