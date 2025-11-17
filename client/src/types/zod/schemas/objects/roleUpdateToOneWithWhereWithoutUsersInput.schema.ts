import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './roleWhereInput.schema';
import { roleUpdateWithoutUsersInputObjectSchema as roleUpdateWithoutUsersInputObjectSchema } from './roleUpdateWithoutUsersInput.schema';
import { roleUncheckedUpdateWithoutUsersInputObjectSchema as roleUncheckedUpdateWithoutUsersInputObjectSchema } from './roleUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => roleWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => roleUpdateWithoutUsersInputObjectSchema), z.lazy(() => roleUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const roleUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.roleUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.roleUpdateToOneWithWhereWithoutUsersInput>;
export const roleUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
