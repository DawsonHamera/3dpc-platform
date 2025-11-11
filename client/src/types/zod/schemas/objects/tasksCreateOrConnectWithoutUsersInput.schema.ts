import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksCreateWithoutUsersInputObjectSchema as tasksCreateWithoutUsersInputObjectSchema } from './tasksCreateWithoutUsersInput.schema';
import { tasksUncheckedCreateWithoutUsersInputObjectSchema as tasksUncheckedCreateWithoutUsersInputObjectSchema } from './tasksUncheckedCreateWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tasksCreateWithoutUsersInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutUsersInputObjectSchema)])
}).strict();
export const tasksCreateOrConnectWithoutUsersInputObjectSchema: z.ZodType<Prisma.tasksCreateOrConnectWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateOrConnectWithoutUsersInput>;
export const tasksCreateOrConnectWithoutUsersInputObjectZodSchema = makeSchema();
