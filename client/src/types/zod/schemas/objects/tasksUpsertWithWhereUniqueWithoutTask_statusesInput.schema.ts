import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutTask_statusesInputObjectSchema as tasksUpdateWithoutTask_statusesInputObjectSchema } from './tasksUpdateWithoutTask_statusesInput.schema';
import { tasksUncheckedUpdateWithoutTask_statusesInputObjectSchema as tasksUncheckedUpdateWithoutTask_statusesInputObjectSchema } from './tasksUncheckedUpdateWithoutTask_statusesInput.schema';
import { tasksCreateWithoutTask_statusesInputObjectSchema as tasksCreateWithoutTask_statusesInputObjectSchema } from './tasksCreateWithoutTask_statusesInput.schema';
import { tasksUncheckedCreateWithoutTask_statusesInputObjectSchema as tasksUncheckedCreateWithoutTask_statusesInputObjectSchema } from './tasksUncheckedCreateWithoutTask_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tasksUpdateWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutTask_statusesInputObjectSchema)]),
  create: z.union([z.lazy(() => tasksCreateWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutTask_statusesInputObjectSchema)])
}).strict();
export const tasksUpsertWithWhereUniqueWithoutTask_statusesInputObjectSchema: z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutTask_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutTask_statusesInput>;
export const tasksUpsertWithWhereUniqueWithoutTask_statusesInputObjectZodSchema = makeSchema();
