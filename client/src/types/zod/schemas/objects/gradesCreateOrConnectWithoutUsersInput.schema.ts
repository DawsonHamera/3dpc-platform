import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './gradesWhereUniqueInput.schema';
import { gradesCreateWithoutUsersInputObjectSchema as gradesCreateWithoutUsersInputObjectSchema } from './gradesCreateWithoutUsersInput.schema';
import { gradesUncheckedCreateWithoutUsersInputObjectSchema as gradesUncheckedCreateWithoutUsersInputObjectSchema } from './gradesUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => gradesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => gradesCreateWithoutUsersInputObjectSchema), z.lazy(() => gradesUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const gradesCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.gradesCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesCreateOrConnectWithoutUsersInput>;
export const gradesCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
