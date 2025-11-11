import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema';
import { tasksUpdateManyMutationInputObjectSchema as tasksUpdateManyMutationInputObjectSchema } from './tasksUpdateManyMutationInput.schema';
import { tasksUncheckedUpdateManyWithoutTask_statusesInputObjectSchema as tasksUncheckedUpdateManyWithoutTask_statusesInputObjectSchema } from './tasksUncheckedUpdateManyWithoutTask_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateManyMutationInputObjectSchema), z.lazy(() => tasksUncheckedUpdateManyWithoutTask_statusesInputObjectSchema)])
}).strict();
export const tasksUpdateManyWithWhereWithoutTask_statusesInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutTask_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutTask_statusesInput>;
export const tasksUpdateManyWithWhereWithoutTask_statusesInputObjectZodSchema = makeSchema();
