import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './tasksWhereInput.schema';
import { tasksUpdateWithoutError_reportsInputObjectSchema as tasksUpdateWithoutError_reportsInputObjectSchema } from './tasksUpdateWithoutError_reportsInput.schema';
import { tasksUncheckedUpdateWithoutError_reportsInputObjectSchema as tasksUncheckedUpdateWithoutError_reportsInputObjectSchema } from './tasksUncheckedUpdateWithoutError_reportsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tasksWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tasksUpdateWithoutError_reportsInputObjectSchema), z.lazy(() => tasksUncheckedUpdateWithoutError_reportsInputObjectSchema)])
}).strict();
export const tasksUpdateToOneWithWhereWithoutError_reportsInputObjectSchema: z.ZodType<Prisma.tasksUpdateToOneWithWhereWithoutError_reportsInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateToOneWithWhereWithoutError_reportsInput>;
export const tasksUpdateToOneWithWhereWithoutError_reportsInputObjectZodSchema = makeSchema();
