import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradesCreateWithoutUsersInputObjectSchema as gradesCreateWithoutUsersInputObjectSchema } from './gradesCreateWithoutUsersInput.schema';
import { gradesUncheckedCreateWithoutUsersInputObjectSchema as gradesUncheckedCreateWithoutUsersInputObjectSchema } from './gradesUncheckedCreateWithoutUsersInput.schema';
import { gradesCreateOrConnectWithoutUsersInputObjectSchema as gradesCreateOrConnectWithoutUsersInputObjectSchema } from './gradesCreateOrConnectWithoutUsersInput.schema';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './gradesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => gradesCreateWithoutUsersInputObjectSchema), z.lazy(() => gradesUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => gradesCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  connect: z.lazy(() => gradesWhereUniqueInputObjectSchema).optional()
}).strict();
export const gradesCreateNestedOneWithoutUsersInputObjectSchema: z.ZodType<Prisma.gradesCreateNestedOneWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesCreateNestedOneWithoutUsersInput>;
export const gradesCreateNestedOneWithoutUsersInputObjectZodSchema = makeSchema();
