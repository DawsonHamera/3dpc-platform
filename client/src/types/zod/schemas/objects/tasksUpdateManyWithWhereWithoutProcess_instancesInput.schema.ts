import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema';
import { tasksUpdateManyMutationInputObjectSchema as tasksUpdateManyMutationInputObjectSchema } from './tasksUpdateManyMutationInput.schema';
import { tasksUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema as tasksUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema } from './tasksUncheckedUpdateManyWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateManyMutationInputObjectSchema), z.lazy(() => tasksUncheckedUpdateManyWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const tasksUpdateManyWithWhereWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutProcess_instancesInput>;
export const tasksUpdateManyWithWhereWithoutProcess_instancesInputObjectZodSchema = makeSchema();
