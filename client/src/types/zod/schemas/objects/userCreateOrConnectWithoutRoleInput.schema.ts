import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userCreateWithoutRoleInputObjectSchema as userCreateWithoutRoleInputObjectSchema } from './userCreateWithoutRoleInput.schema';
import { userUncheckedCreateWithoutRoleInputObjectSchema as userUncheckedCreateWithoutRoleInputObjectSchema } from './userUncheckedCreateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => userCreateWithoutRoleInputObjectSchema), z.lazy(() => userUncheckedCreateWithoutRoleInputObjectSchema)])
}).strict();
export const userCreateOrConnectWithoutRoleInputObjectSchema: z.ZodType<Prisma.userCreateOrConnectWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.userCreateOrConnectWithoutRoleInput>;
export const userCreateOrConnectWithoutRoleInputObjectZodSchema = makeSchema();
