import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutUsersInputObjectSchema as tasksCreateWithoutUsersInputObjectSchema } from './tasksCreateWithoutUsersInput.schema';
import { tasksUncheckedCreateWithoutUsersInputObjectSchema as tasksUncheckedCreateWithoutUsersInputObjectSchema } from './tasksUncheckedCreateWithoutUsersInput.schema';
import { tasksCreateOrConnectWithoutUsersInputObjectSchema as tasksCreateOrConnectWithoutUsersInputObjectSchema } from './tasksCreateOrConnectWithoutUsersInput.schema';
import { tasksCreateManyUsersInputEnvelopeObjectSchema as tasksCreateManyUsersInputEnvelopeObjectSchema } from './tasksCreateManyUsersInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutUsersInputObjectSchema), z.lazy(() => tasksCreateWithoutUsersInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutUsersInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutUsersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutUsersInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutUsersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyUsersInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tasksUncheckedCreateNestedManyWithoutUsersInputObjectSchema: z.ZodType<Prisma.tasksUncheckedCreateNestedManyWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUncheckedCreateNestedManyWithoutUsersInput>;
export const tasksUncheckedCreateNestedManyWithoutUsersInputObjectZodSchema = makeSchema();
