import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { task_statusesCreateWithoutTasksInputObjectSchema as task_statusesCreateWithoutTasksInputObjectSchema } from './task_statusesCreateWithoutTasksInput.schema';
import { task_statusesUncheckedCreateWithoutTasksInputObjectSchema as task_statusesUncheckedCreateWithoutTasksInputObjectSchema } from './task_statusesUncheckedCreateWithoutTasksInput.schema';
import { task_statusesCreateOrConnectWithoutTasksInputObjectSchema as task_statusesCreateOrConnectWithoutTasksInputObjectSchema } from './task_statusesCreateOrConnectWithoutTasksInput.schema';
import { task_statusesWhereUniqueInputObjectSchema as task_statusesWhereUniqueInputObjectSchema } from './task_statusesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => task_statusesCreateWithoutTasksInputObjectSchema), z.lazy(() => task_statusesUncheckedCreateWithoutTasksInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => task_statusesCreateOrConnectWithoutTasksInputObjectSchema).optional(),
  connect: z.lazy(() => task_statusesWhereUniqueInputObjectSchema).optional()
}).strict();
export const task_statusesCreateNestedOneWithoutTasksInputObjectSchema: z.ZodType<Prisma.task_statusesCreateNestedOneWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesCreateNestedOneWithoutTasksInput>;
export const task_statusesCreateNestedOneWithoutTasksInputObjectZodSchema = makeSchema();
