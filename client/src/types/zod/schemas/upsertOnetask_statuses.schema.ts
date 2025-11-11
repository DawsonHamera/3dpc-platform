import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesSelectObjectSchema as task_statusesSelectObjectSchema } from './objects/task_statusesSelect.schema';
import { task_statusesIncludeObjectSchema as task_statusesIncludeObjectSchema } from './objects/task_statusesInclude.schema';
import { task_statusesWhereUniqueInputObjectSchema as task_statusesWhereUniqueInputObjectSchema } from './objects/task_statusesWhereUniqueInput.schema';
import { task_statusesCreateInputObjectSchema as task_statusesCreateInputObjectSchema } from './objects/task_statusesCreateInput.schema';
import { task_statusesUncheckedCreateInputObjectSchema as task_statusesUncheckedCreateInputObjectSchema } from './objects/task_statusesUncheckedCreateInput.schema';
import { task_statusesUpdateInputObjectSchema as task_statusesUpdateInputObjectSchema } from './objects/task_statusesUpdateInput.schema';
import { task_statusesUncheckedUpdateInputObjectSchema as task_statusesUncheckedUpdateInputObjectSchema } from './objects/task_statusesUncheckedUpdateInput.schema';

export const task_statusesUpsertOneSchema: z.ZodType<Prisma.task_statusesUpsertArgs> = z.object({ select: task_statusesSelectObjectSchema.optional(), include: task_statusesIncludeObjectSchema.optional(), where: task_statusesWhereUniqueInputObjectSchema, create: z.union([ task_statusesCreateInputObjectSchema, task_statusesUncheckedCreateInputObjectSchema ]), update: z.union([ task_statusesUpdateInputObjectSchema, task_statusesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.task_statusesUpsertArgs>;

export const task_statusesUpsertOneZodSchema = z.object({ select: task_statusesSelectObjectSchema.optional(), include: task_statusesIncludeObjectSchema.optional(), where: task_statusesWhereUniqueInputObjectSchema, create: z.union([ task_statusesCreateInputObjectSchema, task_statusesUncheckedCreateInputObjectSchema ]), update: z.union([ task_statusesUpdateInputObjectSchema, task_statusesUncheckedUpdateInputObjectSchema ]) }).strict();