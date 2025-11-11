import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesSelectObjectSchema as task_statusesSelectObjectSchema } from './objects/task_statusesSelect.schema';
import { task_statusesIncludeObjectSchema as task_statusesIncludeObjectSchema } from './objects/task_statusesInclude.schema';
import { task_statusesCreateInputObjectSchema as task_statusesCreateInputObjectSchema } from './objects/task_statusesCreateInput.schema';
import { task_statusesUncheckedCreateInputObjectSchema as task_statusesUncheckedCreateInputObjectSchema } from './objects/task_statusesUncheckedCreateInput.schema';

export const task_statusesCreateOneSchema: z.ZodType<Prisma.task_statusesCreateArgs> = z.object({ select: task_statusesSelectObjectSchema.optional(), include: task_statusesIncludeObjectSchema.optional(), data: z.union([task_statusesCreateInputObjectSchema, task_statusesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.task_statusesCreateArgs>;

export const task_statusesCreateOneZodSchema = z.object({ select: task_statusesSelectObjectSchema.optional(), include: task_statusesIncludeObjectSchema.optional(), data: z.union([task_statusesCreateInputObjectSchema, task_statusesUncheckedCreateInputObjectSchema]) }).strict();