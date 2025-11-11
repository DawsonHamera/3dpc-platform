import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { modelsWhereInputObjectSchema as modelsWhereInputObjectSchema } from './modelsWhereInput.schema';
import { modelsUpdateWithoutTasksInputObjectSchema as modelsUpdateWithoutTasksInputObjectSchema } from './modelsUpdateWithoutTasksInput.schema';
import { modelsUncheckedUpdateWithoutTasksInputObjectSchema as modelsUncheckedUpdateWithoutTasksInputObjectSchema } from './modelsUncheckedUpdateWithoutTasksInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => modelsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => modelsUpdateWithoutTasksInputObjectSchema), z.lazy(() => modelsUncheckedUpdateWithoutTasksInputObjectSchema)])
}).strict();
export const modelsUpdateToOneWithWhereWithoutTasksInputObjectSchema: z.ZodType<Prisma.modelsUpdateToOneWithWhereWithoutTasksInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsUpdateToOneWithWhereWithoutTasksInput>;
export const modelsUpdateToOneWithWhereWithoutTasksInputObjectZodSchema = makeSchema();
