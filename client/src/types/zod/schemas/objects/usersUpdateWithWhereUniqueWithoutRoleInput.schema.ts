import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithoutRoleInputObjectSchema as usersUpdateWithoutRoleInputObjectSchema } from './usersUpdateWithoutRoleInput.schema';
import { usersUncheckedUpdateWithoutRoleInputObjectSchema as usersUncheckedUpdateWithoutRoleInputObjectSchema } from './usersUncheckedUpdateWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => usersUpdateWithoutRoleInputObjectSchema), z.lazy(() => usersUncheckedUpdateWithoutRoleInputObjectSchema)])
}).strict();
export const usersUpdateWithWhereUniqueWithoutRoleInputObjectSchema: z.ZodType<Prisma.usersUpdateWithWhereUniqueWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateWithWhereUniqueWithoutRoleInput>;
export const usersUpdateWithWhereUniqueWithoutRoleInputObjectZodSchema = makeSchema();
