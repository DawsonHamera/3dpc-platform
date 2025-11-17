import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userScalarWhereInputObjectSchema as userScalarWhereInputObjectSchema } from './userScalarWhereInput.schema';
import { userUpdateManyMutationInputObjectSchema as userUpdateManyMutationInputObjectSchema } from './userUpdateManyMutationInput.schema';
import { userUncheckedUpdateManyWithoutRoleInputObjectSchema as userUncheckedUpdateManyWithoutRoleInputObjectSchema } from './userUncheckedUpdateManyWithoutRoleInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => userScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => userUpdateManyMutationInputObjectSchema), z.lazy(() => userUncheckedUpdateManyWithoutRoleInputObjectSchema)])
}).strict();
export const userUpdateManyWithWhereWithoutRoleInputObjectSchema: z.ZodType<Prisma.userUpdateManyWithWhereWithoutRoleInput> = makeSchema() as unknown as z.ZodType<Prisma.userUpdateManyWithWhereWithoutRoleInput>;
export const userUpdateManyWithWhereWithoutRoleInputObjectZodSchema = makeSchema();
