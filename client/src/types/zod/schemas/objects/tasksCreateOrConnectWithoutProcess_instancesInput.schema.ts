import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksCreateWithoutProcess_instancesInputObjectSchema as tasksCreateWithoutProcess_instancesInputObjectSchema } from './tasksCreateWithoutProcess_instancesInput.schema';
import { tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema as tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema } from './tasksUncheckedCreateWithoutProcess_instancesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tasksCreateWithoutProcess_instancesInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutProcess_instancesInputObjectSchema)])
}).strict();
export const tasksCreateOrConnectWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.tasksCreateOrConnectWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateOrConnectWithoutProcess_instancesInput>;
export const tasksCreateOrConnectWithoutProcess_instancesInputObjectZodSchema = makeSchema();
