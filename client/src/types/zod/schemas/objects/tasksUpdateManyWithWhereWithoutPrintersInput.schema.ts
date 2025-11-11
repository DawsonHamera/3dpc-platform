import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema';
import { tasksUpdateManyMutationInputObjectSchema as tasksUpdateManyMutationInputObjectSchema } from './tasksUpdateManyMutationInput.schema';
import { tasksUncheckedUpdateManyWithoutPrintersInputObjectSchema as tasksUncheckedUpdateManyWithoutPrintersInputObjectSchema } from './tasksUncheckedUpdateManyWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateManyMutationInputObjectSchema), z.lazy(() => tasksUncheckedUpdateManyWithoutPrintersInputObjectSchema)])
}).strict();
export const tasksUpdateManyWithWhereWithoutPrintersInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutPrintersInput>;
export const tasksUpdateManyWithWhereWithoutPrintersInputObjectZodSchema = makeSchema();
