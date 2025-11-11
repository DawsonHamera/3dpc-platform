import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesSelectObjectSchema as task_statusesSelectObjectSchema } from './objects/task_statusesSelect.schema';
import { task_statusesIncludeObjectSchema as task_statusesIncludeObjectSchema } from './objects/task_statusesInclude.schema';
import { task_statusesUpdateInputObjectSchema as task_statusesUpdateInputObjectSchema } from './objects/task_statusesUpdateInput.schema';
import { task_statusesUncheckedUpdateInputObjectSchema as task_statusesUncheckedUpdateInputObjectSchema } from './objects/task_statusesUncheckedUpdateInput.schema';
import { task_statusesWhereUniqueInputObjectSchema as task_statusesWhereUniqueInputObjectSchema } from './objects/task_statusesWhereUniqueInput.schema';

export const task_statusesUpdateOneSchema: z.ZodType<Prisma.task_statusesUpdateArgs> = z.object({ select: task_statusesSelectObjectSchema.optional(), include: task_statusesIncludeObjectSchema.optional(), data: z.union([task_statusesUpdateInputObjectSchema, task_statusesUncheckedUpdateInputObjectSchema]), where: task_statusesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.task_statusesUpdateArgs>;

export const task_statusesUpdateOneZodSchema = z.object({ select: task_statusesSelectObjectSchema.optional(), include: task_statusesIncludeObjectSchema.optional(), data: z.union([task_statusesUpdateInputObjectSchema, task_statusesUncheckedUpdateInputObjectSchema]), where: task_statusesWhereUniqueInputObjectSchema }).strict();