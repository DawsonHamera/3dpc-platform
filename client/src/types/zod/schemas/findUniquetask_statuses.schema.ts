import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { task_statusesSelectObjectSchema as task_statusesSelectObjectSchema } from './objects/task_statusesSelect.schema';
import { task_statusesIncludeObjectSchema as task_statusesIncludeObjectSchema } from './objects/task_statusesInclude.schema';
import { task_statusesWhereUniqueInputObjectSchema as task_statusesWhereUniqueInputObjectSchema } from './objects/task_statusesWhereUniqueInput.schema';

export const task_statusesFindUniqueSchema: z.ZodType<Prisma.task_statusesFindUniqueArgs> = z.object({ select: task_statusesSelectObjectSchema.optional(), include: task_statusesIncludeObjectSchema.optional(), where: task_statusesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.task_statusesFindUniqueArgs>;

export const task_statusesFindUniqueZodSchema = z.object({ select: task_statusesSelectObjectSchema.optional(), include: task_statusesIncludeObjectSchema.optional(), where: task_statusesWhereUniqueInputObjectSchema }).strict();