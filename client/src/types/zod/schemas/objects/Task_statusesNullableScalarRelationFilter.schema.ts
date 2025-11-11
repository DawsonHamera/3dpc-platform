import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './task_statusesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => task_statusesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => task_statusesWhereInputObjectSchema).optional().nullable()
}).strict();
export const Task_statusesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.Task_statusesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Task_statusesNullableScalarRelationFilter>;
export const Task_statusesNullableScalarRelationFilterObjectZodSchema = makeSchema();
