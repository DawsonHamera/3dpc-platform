import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersScalarWhereInputObjectSchema as usersScalarWhereInputObjectSchema } from './usersScalarWhereInput.schema';
import { usersUpdateManyMutationInputObjectSchema as usersUpdateManyMutationInputObjectSchema } from './usersUpdateManyMutationInput.schema';
import { usersUncheckedUpdateManyWithoutRoleInputObjectSchema as usersUncheckedUpdateManyWithoutRoleInputObjectSchema } from './usersUncheckedUpdateManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => usersScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => usersUpdateManyMutationInputObjectSchema), z.lazy(() => usersUncheckedUpdateManyWithoutRoleInputObjectSchema)])
}).strict();
export const usersUpdateManyWithWhereWithoutRoleInputObjectSchema: z.ZodType<Prisma.usersUpdateManyWithWhereWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateManyWithWhereWithoutRoleInput>;
export const usersUpdateManyWithWhereWithoutRoleInputObjectZodSchema = makeSchema();
