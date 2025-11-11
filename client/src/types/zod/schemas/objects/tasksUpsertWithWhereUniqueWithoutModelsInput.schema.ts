import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutModelsInputObjectSchema as tasksUpdateWithoutModelsInputObjectSchema } from './tasksUpdateWithoutModelsInput.schema';
import { tasksUncheckedUpdateWithoutModelsInputObjectSchema as tasksUncheckedUpdateWithoutModelsInputObjectSchema } from './tasksUncheckedUpdateWithoutModelsInput.schema';
import { tasksCreateWithoutModelsInputObjectSchema as tasksCreateWithoutModelsInputObjectSchema } from './tasksCreateWithoutModelsInput.schema';
import { tasksUncheckedCreateWithoutModelsInputObjectSchema as tasksUncheckedCreateWithoutModelsInputObjectSchema } from './tasksUncheckedCreateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tasksUpdateWithoutModelsInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutModelsInputObjectSchema)]),
  create: z.union([z.lazy(() => tasksCreateWithoutModelsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutModelsInputObjectSchema)])
}).strict();
export const tasksUpsertWithWhereUniqueWithoutModelsInputObjectSchema: z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpsertWithWhereUniqueWithoutModelsInput>;
export const tasksUpsertWithWhereUniqueWithoutModelsInputObjectZodSchema = makeSchema();
