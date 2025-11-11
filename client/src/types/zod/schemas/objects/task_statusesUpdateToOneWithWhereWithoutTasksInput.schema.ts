import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './task_statusesWhereInput.schema';
import { task_statusesUpdateWithoutTasksInputObjectSchema as task_statusesUpdateWithoutTasksInputObjectSchema } from './task_statusesUpdateWithoutTasksInput.schema';
import { task_statusesUncheckedUpdateWithoutTasksInputObjectSchema as task_statusesUncheckedUpdateWithoutTasksInputObjectSchema } from './task_statusesUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => task_statusesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => task_statusesUpdateWithoutTasksInputObjectSchema), z.lazy(() => task_statusesUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const task_statusesUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.task_statusesUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesUpdateToOneWithWhereWithoutTasksInput>;
export const task_statusesUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
