import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema';
import { tasksUpdateManyMutationInputObjectSchema as tasksUpdateManyMutationInputObjectSchema } from './tasksUpdateManyMutationInput.schema';
import { tasksUncheckedUpdateManyWithoutModelsInputObjectSchema as tasksUncheckedUpdateManyWithoutModelsInputObjectSchema } from './tasksUncheckedUpdateManyWithoutModelsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateManyMutationInputObjectSchema), z.lazy(() => tasksUncheckedUpdateManyWithoutModelsInputObjectSchema)])
}).strict();
export const tasksUpdateManyWithWhereWithoutModelsInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutModelsInput>;
export const tasksUpdateManyWithWhereWithoutModelsInputObjectZodSchema = makeSchema();
