import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutRoleInputObjectSchema as userCreateWithoutRoleInputObjectSchema } from './userCreateWithoutRoleInput.schema';
import { userUncheckedCreateWithoutRoleInputObjectSchema as userUncheckedCreateWithoutRoleInputObjectSchema } from './userUncheckedCreateWithoutRoleInput.schema';
import { userCreateOrConnectWithoutRoleInputObjectSchema as userCreateOrConnectWithoutRoleInputObjectSchema } from './userCreateOrConnectWithoutRoleInput.schema';
import { userUpsertWithWhereUniqueWithoutRoleInputObjectSchema as userUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './userUpsertWithWhereUniqueWithoutRoleInput.schema';
import { userCreateManyRoleInputEnvelopeObjectSchema as userCreateManyRoleInputEnvelopeObjectSchema } from './userCreateManyRoleInputEnvelope.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateWithWhereUniqueWithoutRoleInputObjectSchema as userUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './userUpdateWithWhereUniqueWithoutRoleInput.schema';
import { userUpdateManyWithWhereWithoutRoleInputObjectSchema as userUpdateManyWithWhereWithoutRoleInputObjectSchema } from './userUpdateManyWithWhereWithoutRoleInput.schema';
import { userScalarWhereInputObjectSchema as userScalarWhereInputObjectSchema } from './userScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutRoleInputObjectSchema), z.lazy(() => userCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => userUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => userCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => userCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => userUpsertWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => userUpsertWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => userCreateManyRoleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => userWhereUniqueInputObjectSchema), z.lazy(() => userWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => userWhereUniqueInputObjectSchema), z.lazy(() => userWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => userWhereUniqueInputObjectSchema), z.lazy(() => userWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => userWhereUniqueInputObjectSchema), z.lazy(() => userWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => userUpdateWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => userUpdateWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => userUpdateManyWithWhereWithoutRoleInputObjectSchema), z.lazy(() => userUpdateManyWithWhereWithoutRoleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => userScalarWhereInputObjectSchema), z.lazy(() => userScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const userUncheckedUpdateManyWithoutRoleNestedInputObjectSchema: z.ZodType<Prisma.userUncheckedUpdateManyWithoutRoleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.userUncheckedUpdateManyWithoutRoleNestedInput>;
export const userUncheckedUpdateManyWithoutRoleNestedInputObjectZodSchema = makeSchema();
