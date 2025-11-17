import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { roleWhereUniqueInputObjectSchema as roleWhereUniqueInputObjectSchema } from './roleWhereUniqueInput.schema';
import { roleCreateWithoutUsersInputObjectSchema as roleCreateWithoutUsersInputObjectSchema } from './roleCreateWithoutUsersInput.schema';
import { roleUncheckedCreateWithoutUsersInputObjectSchema as roleUncheckedCreateWithoutUsersInputObjectSchema } from './roleUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => roleWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => roleCreateWithoutUsersInputObjectSchema), z.lazy(() => roleUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const roleCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.roleCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.roleCreateOrConnectWithoutUsersInput>;
export const roleCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
