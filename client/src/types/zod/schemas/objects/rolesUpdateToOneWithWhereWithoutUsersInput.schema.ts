import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './rolesWhereInput.schema';
import { rolesUpdateWithoutUsersInputObjectSchema as rolesUpdateWithoutUsersInputObjectSchema } from './rolesUpdateWithoutUsersInput.schema';
import { rolesUncheckedUpdateWithoutUsersInputObjectSchema as rolesUncheckedUpdateWithoutUsersInputObjectSchema } from './rolesUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => rolesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => rolesUpdateWithoutUsersInputObjectSchema), z.lazy(() => rolesUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const rolesUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.rolesUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesUpdateToOneWithWhereWithoutUsersInput>;
export const rolesUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
