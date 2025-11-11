import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutRoleInputObjectSchema as usersCreateWithoutRoleInputObjectSchema } from './usersCreateWithoutRoleInput.schema';
import { usersUncheckedCreateWithoutRoleInputObjectSchema as usersUncheckedCreateWithoutRoleInputObjectSchema } from './usersUncheckedCreateWithoutRoleInput.schema';
import { usersCreateOrConnectWithoutRoleInputObjectSchema as usersCreateOrConnectWithoutRoleInputObjectSchema } from './usersCreateOrConnectWithoutRoleInput.schema';
import { usersCreateManyRoleInputEnvelopeObjectSchema as usersCreateManyRoleInputEnvelopeObjectSchema } from './usersCreateManyRoleInputEnvelope.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutRoleInputObjectSchema), z.lazy(() => usersCreateWithoutRoleInputObjectSchema).array(), z.lazy(() => usersUncheckedCreateWithoutRoleInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutRoleInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => usersCreateOrConnectWithoutRoleInputObjectSchema), z.lazy(() => usersCreateOrConnectWithoutRoleInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => usersCreateManyRoleInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const usersCreateNestedManyWithoutRoleInputObjectSchema: z.ZodType<Prisma.usersCreateNestedManyWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.usersCreateNestedManyWithoutRoleInput>;
export const usersCreateNestedManyWithoutRoleInputObjectZodSchema = makeSchema();
