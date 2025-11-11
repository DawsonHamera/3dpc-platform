import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutTask_statusesInputObjectSchema as tasksUpdateWithoutTask_statusesInputObjectSchema } from './tasksUpdateWithoutTask_statusesInput.schema';
import { tasksUncheckedUpdateWithoutTask_statusesInputObjectSchema as tasksUncheckedUpdateWithoutTask_statusesInputObjectSchema } from './tasksUncheckedUpdateWithoutTask_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutTask_statusesInputObjectSchema)])
}).strict();
export const tasksUpdateWithWhereUniqueWithoutTask_statusesInputObjectSchema: z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutTask_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutTask_statusesInput>;
export const tasksUpdateWithWhereUniqueWithoutTask_statusesInputObjectZodSchema = makeSchema();
