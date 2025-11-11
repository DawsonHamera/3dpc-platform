import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './objects/task_statusesWhereInput.schema';

export const task_statusesDeleteManySchema: z.ZodType<Prisma.task_statusesDeleteManyArgs> = z.object({ where: task_statusesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.task_statusesDeleteManyArgs>;

export const task_statusesDeleteManyZodSchema = z.object({ where: task_statusesWhereInputObjectSchema.optional() }).strict();