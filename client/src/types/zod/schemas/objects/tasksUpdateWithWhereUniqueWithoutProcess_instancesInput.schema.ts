import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutProcess_instancesInputObjectSchema as tasksUpdateWithoutProcess_instancesInputObjectSchema } from './tasksUpdateWithoutProcess_instancesInput.schema';
import { tasksUncheckedUpdateWithoutProcess_instancesInputObjectSchema as tasksUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './tasksUncheckedUpdateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const tasksUpdateWithWhereUniqueWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutProcess_instancesInput>;
export const tasksUpdateWithWhereUniqueWithoutProcess_instancesInputObjectZodSchema = makeSchema();
