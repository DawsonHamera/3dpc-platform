import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksSelectObjectSchema as tasksSelectObjectSchema } from './objects/tasksSelect.schema';
import { tasksIncludeObjectSchema as tasksIncludeObjectSchema } from './objects/tasksInclude.schema';
import { tasksUpdateInputObjectSchema as tasksUpdateInputObjectSchema } from './objects/tasksUpdateInput.schema';
import { tasksUncheckedUpdateInputObjectSchema as tasksUncheckedUpdateInputObjectSchema } from './objects/tasksUncheckedUpdateInput.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './objects/tasksWhereUniqueInput.schema';

export const tasksUpdateOneSchema: z.ZodType<Prisma.tasksUpdateArgs> = z.object({ select: tasksSelectObjectSchema.optional(), include: tasksIncludeObjectSchema.optional(), data: z.union([tasksUpdateInputObjectSchema, tasksUncheckedUpdateInputObjectSchema]), where: tasksWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tasksUpdateArgs>;

export const tasksUpdateOneZodSchema = z.object({ select: tasksSelectObjectSchema.optional(), include: tasksIncludeObjectSchema.optional(), data: z.union([tasksUpdateInputObjectSchema, tasksUncheckedUpdateInputObjectSchema]), where: tasksWhereUniqueInputObjectSchema }).strict();