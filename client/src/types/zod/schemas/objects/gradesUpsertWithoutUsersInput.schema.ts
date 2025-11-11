import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradesUpdateWithoutUsersInputObjectSchema as gradesUpdateWithoutUsersInputObjectSchema } from './gradesUpdateWithoutUsersInput.schema';
import { gradesUncheckedUpdateWithoutUsersInputObjectSchema as gradesUncheckedUpdateWithoutUsersInputObjectSchema } from './gradesUncheckedUpdateWithoutUsersInput.schema';
import { gradesCreateWithoutUsersInputObjectSchema as gradesCreateWithoutUsersInputObjectSchema } from './gradesCreateWithoutUsersInput.schema';
import { gradesUncheckedCreateWithoutUsersInputObjectSchema as gradesUncheckedCreateWithoutUsersInputObjectSchema } from './gradesUncheckedCreateWithoutUsersInput.schema';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './gradesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => gradesUpdateWithoutUsersInputObjectSchema), z.lazy(() => gradesUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => gradesCreateWithoutUsersInputObjectSchema), z.lazy(() => gradesUncheckedCreateWithoutUsersInputObjectSchema)]),
  where: z.lazy(() => gradesWhereInputObjectSchema).optional()
}).strict();
export const gradesUpsertWithoutUsersInputObjectSchema: z.ZodType<Prisma.gradesUpsertWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesUpsertWithoutUsersInput>;
export const gradesUpsertWithoutUsersInputObjectZodSchema = makeSchema();
