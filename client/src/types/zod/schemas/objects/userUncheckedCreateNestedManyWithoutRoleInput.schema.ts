import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userCreateWithoutRoleInputObjectSchema as userCreateWithoutRoleInputObjectSchema } from './userCreateWithoutRoleInput.schema';
import { userUncheckedCreateWithoutRoleInputObjectSchema as userUncheckedCreateWithoutRoleInputObjectSchema } from './userUncheckedCreateWithoutRoleInput.schema';
import { userCreateOrConnectWithoutRoleInputObjectSchema as userCreateOrConnectWithoutRoleInputObjectSchema } from './userCreateOrConnectWithoutRoleInput.schema';
import { userCreateManyRoleInputEnvelopeObjectSchema as userCreateManyRoleInputEnvelopeObjectSchema } from './userCreateManyRoleInputEnvelope.schema';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => userCreateWithoutRoleInputObjectSchema), z.lazy(() => userCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => userUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => userCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => userCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => userCreateManyRoleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => userWhereUniqueInputObjectSchema), z.lazy(() => userWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const userUncheckedCreateNestedManyWithoutRoleInputObjectSchema: z.ZodType<Prisma.userUncheckedCreateNestedManyWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.userUncheckedCreateNestedManyWithoutRoleInput>;
export const userUncheckedCreateNestedManyWithoutRoleInputObjectZodSchema = makeSchema();
