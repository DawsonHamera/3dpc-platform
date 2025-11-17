import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereUniqueInputObjectSchema as userWhereUniqueInputObjectSchema } from './userWhereUniqueInput.schema';
import { userUpdateWithoutRoleInputObjectSchema as userUpdateWithoutRoleInputObjectSchema } from './userUpdateWithoutRoleInput.schema';
import { userUncheckedUpdateWithoutRoleInputObjectSchema as userUncheckedUpdateWithoutRoleInputObjectSchema } from './userUncheckedUpdateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => userUpdateWithoutRoleInputObjectSchema), z.lazy(() => userUncheckedUpdateWithoutRoleInputObjectSchema)])
}).strict();
export const userUpdateWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.userUpdateWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateWithWhereUniqueWithoutRoleInput>;
export const userUpdateWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
