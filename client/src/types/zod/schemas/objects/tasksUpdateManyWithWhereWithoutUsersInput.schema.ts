import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema';
import { tasksUpdateManyMutationInputObjectSchema as tasksUpdateManyMutationInputObjectSchema } from './tasksUpdateManyMutationInput.schema';
import { tasksUncheckedUpdateManyWithoutUsersInputObjectSchema as tasksUncheckedUpdateManyWithoutUsersInputObjectSchema } from './tasksUncheckedUpdateManyWithoutUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateManyMutationInputObjectSchema), z.lazy(() => tasksUncheckedUpdateManyWithoutUsersInputObjectSchema)])
}).strict();
export const tasksUpdateManyWithWhereWithoutUsersInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutUsersInput>;
export const tasksUpdateManyWithWhereWithoutUsersInputObjectZodSchema = makeSchema();
