import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithoutRequestsInputObjectSchema as tasksUpdateWithoutRequestsInputObjectSchema } from './tasksUpdateWithoutRequestsInput.schema';
import { tasksUncheckedUpdateWithoutRequestsInputObjectSchema as tasksUncheckedUpdateWithoutRequestsInputObjectSchema } from './tasksUncheckedUpdateWithoutRequestsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tasksUpdateWithoutRequestsInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutRequestsInputObjectSchema)])
}).strict();
export const tasksUpdateWithWhereUniqueWithoutRequestsInputObjectSchema: z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutRequestsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateWithWhereUniqueWithoutRequestsInput>;
export const tasksUpdateWithWhereUniqueWithoutRequestsInputObjectZodSchema = makeSchema();
