import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksWhereInputObjectSchema as tasksWhereInputObjectSchema } from './tasksWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => tasksWhereInputObjectSchema).optional(),
  some: z.lazy(() => tasksWhereInputObjectSchema).optional(),
  none: z.lazy(() => tasksWhereInputObjectSchema).optional()
}).strict();
export const TasksListRelationFilterObjectSchema: z.ZodType<Prisma.TasksListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.TasksListRelationFilter>;
export const TasksListRelationFilterObjectZodSchema = makeSchema();
