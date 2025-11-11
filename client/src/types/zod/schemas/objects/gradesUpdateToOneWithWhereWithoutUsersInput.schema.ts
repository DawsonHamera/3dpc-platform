import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './gradesWhereInput.schema';
import { gradesUpdateWithoutUsersInputObjectSchema as gradesUpdateWithoutUsersInputObjectSchema } from './gradesUpdateWithoutUsersInput.schema';
import { gradesUncheckedUpdateWithoutUsersInputObjectSchema as gradesUncheckedUpdateWithoutUsersInputObjectSchema } from './gradesUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => gradesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => gradesUpdateWithoutUsersInputObjectSchema), z.lazy(() => gradesUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const gradesUpdateToOneWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.gradesUpdateToOneWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesUpdateToOneWithWhereWithoutUsersInput>;
export const gradesUpdateToOneWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
