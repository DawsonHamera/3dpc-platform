import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema';
import { tasksUpdateManyMutationInputObjectSchema as tasksUpdateManyMutationInputObjectSchema } from './tasksUpdateManyMutationInput.schema';
import { tasksUncheckedUpdateManyWithoutRequestsInputObjectSchema as tasksUncheckedUpdateManyWithoutRequestsInputObjectSchema } from './tasksUncheckedUpdateManyWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateManyMutationInputObjectSchema), z.lazy(() => tasksUncheckedUpdateManyWithoutRequestsInputObjectSchema)])
}).strict();
export const tasksUpdateManyWithWhereWithoutRequestsInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithWhereWithoutRequestsInput>;
export const tasksUpdateManyWithWhereWithoutRequestsInputObjectZodSchema = makeSchema();
