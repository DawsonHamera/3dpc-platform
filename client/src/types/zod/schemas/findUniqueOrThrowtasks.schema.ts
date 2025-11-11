import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksSelectObjectSchema as tasksSelectObjectSchema } from './objects/tasksSelect.schema';
import { tasksIncludeObjectSchema as tasksIncludeObjectSchema } from './objects/tasksInclude.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './objects/tasksWhereUniqueInput.schema';

export const tasksFindUniqueOrThrowSchema: z.ZodType<Prisma.tasksFindUniqueOrThrowArgs> = z.object({ select: tasksSelectObjectSchema.optional(), include: tasksIncludeObjectSchema.optional(), where: tasksWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tasksFindUniqueOrThrowArgs>;

export const tasksFindUniqueOrThrowZodSchema = z.object({ select: tasksSelectObjectSchema.optional(), include: tasksIncludeObjectSchema.optional(), where: tasksWhereUniqueInputObjectSchema }).strict();