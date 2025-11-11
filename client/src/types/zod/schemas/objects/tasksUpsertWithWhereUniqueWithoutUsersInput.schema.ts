import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutUsersInputObjectSchema as tasksUpdateWithoutUsersInputObjectSchema } from './tasksUpdateWithoutUsersInput.schema';
import { tasksUncheckedUpdateWithoutUsersInputObjectSchema as tasksUncheckedUpdateWithoutUsersInputObjectSchema } from './tasksUncheckedUpdateWithoutUsersInput.schema';
import { tasksCreateWithoutUsersInputObjectSchema as tasksCreateWithoutUsersInputObjectSchema } from './tasksCreateWithoutUsersInput.schema';
import { tasksUncheckedCreateWithoutUsersInputObjectSchema as tasksUncheckedCreateWithoutUsersInputObjectSchema } from './tasksUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tasksUpdateWithoutUsersInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => tasksCreateWithoutUsersInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const tasksUpsertWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutUsersInput>;
export const tasksUpsertWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
