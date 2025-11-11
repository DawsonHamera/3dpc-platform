import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesUpdateManyMutationInputObjectSchema as task_statusesUpdateManyMutationInputObjectSchema } from './objects/task_statusesUpdateManyMutationInput.schema';
import { task_statusesWhereInputObjectSchema as task_statusesWhereInputObjectSchema } from './objects/task_statusesWhereInput.schema';

export const task_statusesUpdateManySchema: z.ZodType<Prisma.task_statusesUpdateManyArgs> = z.object({ data: task_statusesUpdateManyMutationInputObjectSchema, where: task_statusesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.task_statusesUpdateManyArgs>;

export const task_statusesUpdateManyZodSchema = z.object({ data: task_statusesUpdateManyMutationInputObjectSchema, where: task_statusesWhereInputObjectSchema.optional() }).strict();