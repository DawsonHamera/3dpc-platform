import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutProcess_instancesInputObjectSchema as tasksUpdateWithoutProcess_instancesInputObjectSchema } from './tasksUpdateWithoutProcess_instancesInput.schema';
import { tasksUncheckedUpdateWithoutProcess_instancesInputObjectSchema as tasksUncheckedUpdateWithoutProcess_instancesInputObjectSchema } from './tasksUncheckedUpdateWithoutProcess_instancesInput.schema';
import { tasksCreateWithoutProcess_instancesInputObjectSchema as tasksCreateWithoutProcess_instancesInputObjectSchema } from './tasksCreateWithoutProcess_instancesInput.schema';
import { tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema as tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './tasksUncheckedCreateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tasksUpdateWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutProcess_instancesInputObjectSchema)]),
  create: z.union([z.lazy(() => tasksCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const tasksUpsertWithWhereUniqueWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutProcess_instancesInput>;
export const tasksUpsertWithWhereUniqueWithoutProcess_instancesInputObjectZodSchema = makeSchema();
