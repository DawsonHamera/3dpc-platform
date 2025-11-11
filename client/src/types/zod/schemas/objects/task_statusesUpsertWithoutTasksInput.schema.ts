import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { task_statusesUpdateWithoutTasksInputObjectSchema as task_statusesUpdateWithoutTasksInputObjectSchema } from './task_statusesUpdateWithoutTasksInput.schema';
import { task_statusesUncheckedUpdateWithoutTasksInputObjectSchema as task_statusesUncheckedUpdateWithoutTasksInputObjectSchema } from './task_statusesUncheckedUpdateWithoutTasksInput.schema';
import { task_statusesCreateWithoutTasksInputObjectSchema as task_statusesCreateWithoutTasksInputObjectSchema } from './task_statusesCreateWithoutTasksInput.schema';
import { task_statusesUncheckedCreateWithoutTasksInputObjectSchema as task_statusesUncheckedCreateWithoutTasksInputObjectSchema } from './task_statusesUncheckedCreateWithoutTasksInput.schema';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './task_statusesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => task_statusesUpdateWithoutTasksInputObjectSchema), z.lazy(() => task_statusesUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => task_statusesCreateWithoutTasksInputObjectSchema), z.lazy(() => task_statusesUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => task_statusesWhereInputObjectSchema).optional()
}).strict();
export const task_statusesUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.task_statusesUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesUpsertWithoutTasksInput>;
export const task_statusesUpsertWithoutTasksInputObjectZodSchema = makeSchema();
