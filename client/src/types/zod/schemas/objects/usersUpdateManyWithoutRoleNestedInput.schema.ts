import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutRoleInputObjectSchema as usersCreateWithoutRoleInputObjectSchema } from './usersCreateWithoutRoleInput.schema';
import { usersUncheckedCreateWithoutRoleInputObjectSchema as usersUncheckedCreateWithoutRoleInputObjectSchema } from './usersUncheckedCreateWithoutRoleInput.schema';
import { usersCreateOrConnectWithoutRoleInputObjectSchema as usersCreateOrConnectWithoutRoleInputObjectSchema } from './usersCreateOrConnectWithoutRoleInput.schema';
import { usersUpsertWithWhereUniqueWithoutRoleInputObjectSchema as usersUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './usersUpsertWithWhereUniqueWithoutRoleInput.schema';
import { usersCreateManyRoleInputEnvelopeObjectSchema as usersCreateManyRoleInputEnvelopeObjectSchema } from './usersCreateManyRoleInputEnvelope.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithWhereUniqueWithoutRoleInputObjectSchema as usersUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './usersUpdateWithWhereUniqueWithoutRoleInput.schema';
import { usersUpdateManyWithWhereWithoutRoleInputObjectSchema as usersUpdateManyWithWhereWithoutRoleInputObjectSchema } from './usersUpdateManyWithWhereWithoutRoleInput.schema';
import { usersScalarWhereInputObjectSchema as usersScalarWhereInputObjectSchema } from './usersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutRoleInputObjectSchema), z.lazy(() => usersCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => usersUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => usersCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => usersCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => usersUpsertWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => usersUpsertWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => usersCreateManyRoleInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => usersUpdateWithWhereUniqueWithoutRoleInputObjectSchema), z.lazy(() => usersUpdateWithWhereUniqueWithoutRoleInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => usersUpdateManyWithWhereWithoutRoleInputObjectSchema), z.lazy(() => usersUpdateManyWithWhereWithoutRoleInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => usersScalarWhereInputObjectSchema), z.lazy(() => usersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const usersUpdateManyWithoutRoleNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateManyWithoutRoleNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateManyWithoutRoleNestedInput>;
export const usersUpdateManyWithoutRoleNestedInputObjectZodSchema = makeSchema();
