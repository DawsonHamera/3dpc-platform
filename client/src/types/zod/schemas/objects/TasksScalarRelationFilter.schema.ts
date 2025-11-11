import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './tasksWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => tasksWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => tasksWhereInputObjectSchema).optional()
}).strict();
export const TasksScalarRelationFilterObjectSchema: z.ZodType<Prisma.TasksScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TasksScalarRelationFilter>;
export const TasksScalarRelationFilterObjectZodSchema = makeSchema();
