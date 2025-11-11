import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradesCreateWithoutUsersInputObjectSchema as gradesCreateWithoutUsersInputObjectSchema } from './gradesCreateWithoutUsersInput.schema';
import { gradesUncheckedCreateWithoutUsersInputObjectSchema as gradesUncheckedCreateWithoutUsersInputObjectSchema } from './gradesUncheckedCreateWithoutUsersInput.schema';
import { gradesCreateOrConnectWithoutUsersInputObjectSchema as gradesCreateOrConnectWithoutUsersInputObjectSchema } from './gradesCreateOrConnectWithoutUsersInput.schema';
import { gradesUpsertWithoutUsersInputObjectSchema as gradesUpsertWithoutUsersInputObjectSchema } from './gradesUpsertWithoutUsersInput.schema';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './gradesWhereInput.schema';
import { gradesWhereUniqueInputObjectSchema as gradesWhereUniqueInputObjectSchema } from './gradesWhereUniqueInput.schema';
import { gradesUpdateToOneWithWhereWithoutUsersInputObjectSchema as gradesUpdateToOneWithWhereWithoutUsersInputObjectSchema } from './gradesUpdateToOneWithWhereWithoutUsersInput.schema';
import { gradesUpdateWithoutUsersInputObjectSchema as gradesUpdateWithoutUsersInputObjectSchema } from './gradesUpdateWithoutUsersInput.schema';
import { gradesUncheckedUpdateWithoutUsersInputObjectSchema as gradesUncheckedUpdateWithoutUsersInputObjectSchema } from './gradesUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => gradesCreateWithoutUsersInputObjectSchema), z.lazy(() => gradesUncheckedCreateWithoutUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => gradesCreateOrConnectWithoutUsersInputObjectSchema).optional(),
  upsert: z.lazy(() => gradesUpsertWithoutUsersInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => gradesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => gradesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => gradesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => gradesUpdateToOneWithWhereWithoutUsersInputObjectSchema), z.lazy(() => gradesUpdateWithoutUsersInputObjectSchema), z.lazy(() => gradesUncheckedUpdateWithoutUsersInputObjectSchema)]).optional()
}).strict();
export const gradesUpdateOneWithoutUsersNestedInputObjectSchema: z.ZodType<Prisma.gradesUpdateOneWithoutUsersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesUpdateOneWithoutUsersNestedInput>;
export const gradesUpdateOneWithoutUsersNestedInputObjectZodSchema = makeSchema();
