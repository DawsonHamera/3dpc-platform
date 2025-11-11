import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksCreateWithoutTask_statusesInputObjectSchema as tasksCreateWithoutTask_statusesInputObjectSchema } from './tasksCreateWithoutTask_statusesInput.schema';
import { tasksUncheckedCreateWithoutTask_statusesInputObjectSchema as tasksUncheckedCreateWithoutTask_statusesInputObjectSchema } from './tasksUncheckedCreateWithoutTask_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tasksCreateWithoutTask_statusesInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutTask_statusesInputObjectSchema)])
}).strict();
export const tasksCreateOrConnectWithoutTask_statusesInputObjectSchema: z.ZodType<Prisma.tasksCreateOrConnectWithoutTask_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateOrConnectWithoutTask_statusesInput>;
export const tasksCreateOrConnectWithoutTask_statusesInputObjectZodSchema = makeSchema();
