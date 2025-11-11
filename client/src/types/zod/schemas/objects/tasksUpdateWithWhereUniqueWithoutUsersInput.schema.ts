import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutUsersInputObjectSchema as tasksUpdateWithoutUsersInputObjectSchema } from './tasksUpdateWithoutUsersInput.schema';
import { tasksUncheckedUpdateWithoutUsersInputObjectSchema as tasksUncheckedUpdateWithoutUsersInputObjectSchema } from './tasksUncheckedUpdateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateWithoutUsersInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutUsersInputObjectSchema)])
}).strict();
export const tasksUpdateWithWhereUniqueWithoutUsersInputObjectSchema: z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutUsersInput>;
export const tasksUpdateWithWhereUniqueWithoutUsersInputObjectZodSchema = makeSchema();
