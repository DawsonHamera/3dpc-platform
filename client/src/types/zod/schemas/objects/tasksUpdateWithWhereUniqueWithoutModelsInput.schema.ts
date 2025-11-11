import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutModelsInputObjectSchema as tasksUpdateWithoutModelsInputObjectSchema } from './tasksUpdateWithoutModelsInput.schema';
import { tasksUncheckedUpdateWithoutModelsInputObjectSchema as tasksUncheckedUpdateWithoutModelsInputObjectSchema } from './tasksUncheckedUpdateWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateWithoutModelsInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutModelsInputObjectSchema)])
}).strict();
export const tasksUpdateWithWhereUniqueWithoutModelsInputObjectSchema: z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutModelsInput>;
export const tasksUpdateWithWhereUniqueWithoutModelsInputObjectZodSchema = makeSchema();
