import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksCreateWithoutModelsInputObjectSchema as tasksCreateWithoutModelsInputObjectSchema } from './tasksCreateWithoutModelsInput.schema';
import { tasksUncheckedCreateWithoutModelsInputObjectSchema as tasksUncheckedCreateWithoutModelsInputObjectSchema } from './tasksUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tasksCreateWithoutModelsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const tasksCreateOrConnectWithoutModelsInputObjectSchema: z.ZodType<Prisma.tasksCreateOrConnectWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksCreateOrConnectWithoutModelsInput>;
export const tasksCreateOrConnectWithoutModelsInputObjectZodSchema = makeSchema();
