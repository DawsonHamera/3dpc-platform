import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { task_statusesWhereUniqueInputObjectSchema as task_statusesWhereUniqueInputObjectSchema } from './task_statusesWhereUniqueInput.schema';
import { task_statusesCreateWithoutTasksInputObjectSchema as task_statusesCreateWithoutTasksInputObjectSchema } from './task_statusesCreateWithoutTasksInput.schema';
import { task_statusesUncheckedCreateWithoutTasksInputObjectSchema as task_statusesUncheckedCreateWithoutTasksInputObjectSchema } from './task_statusesUncheckedCreateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => task_statusesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => task_statusesCreateWithoutTasksInputObjectSchema), z.lazy(() => task_statusesUncheckedCreateWithoutTasksInputObjectSchema)])
}).strict();
export const task_statusesCreateOrConnectWithoutTasksInputObjectSchema: z.ZodType<Prisma.task_statusesCreateOrConnectWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesCreateOrConnectWithoutTasksInput>;
export const task_statusesCreateOrConnectWithoutTasksInputObjectZodSchema = makeSchema();
