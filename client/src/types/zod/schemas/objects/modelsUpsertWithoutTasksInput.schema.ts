import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsUpdateWithoutTasksInputObjectSchema as modelsUpdateWithoutTasksInputObjectSchema } from './modelsUpdateWithoutTasksInput.schema';
import { modelsUncheckedUpdateWithoutTasksInputObjectSchema as modelsUncheckedUpdateWithoutTasksInputObjectSchema } from './modelsUncheckedUpdateWithoutTasksInput.schema';
import { modelsCreateWithoutTasksInputObjectSchema as modelsCreateWithoutTasksInputObjectSchema } from './modelsCreateWithoutTasksInput.schema';
import { modelsUncheckedCreateWithoutTasksInputObjectSchema as modelsUncheckedCreateWithoutTasksInputObjectSchema } from './modelsUncheckedCreateWithoutTasksInput.schema';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './modelsWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => modelsUpdateWithoutTasksInputObjectSchema), z.lazy(() => modelsUncheckedUpdateWithoutTasksInputObjectSchema)]),
  create: z.union([z.lazy(() => modelsCreateWithoutTasksInputObjectSchema), z.lazy(() => modelsUncheckedCreateWithoutTasksInputObjectSchema)]),
  where: z.lazy(() => modelsWhereInputObjectSchema).optional()
}).strict();
export const modelsUpsertWithoutTasksInputObjectSchema: z.ZodType<Prisma.modelsUpsertWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsUpsertWithoutTasksInput>;
export const modelsUpsertWithoutTasksInputObjectZodSchema = makeSchema();
