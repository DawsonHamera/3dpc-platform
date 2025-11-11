import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksSelectObjectSchema as tasksSelectObjectSchema } from './objects/tasksSelect.schema';
import { tasksIncludeObjectSchema as tasksIncludeObjectSchema } from './objects/tasksInclude.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './objects/tasksWhereUniqueInput.schema';
import { tasksCreateInputObjectSchema as tasksCreateInputObjectSchema } from './objects/tasksCreateInput.schema';
import { tasksUncheckedCreateInputObjectSchema as tasksUncheckedCreateInputObjectSchema } from './objects/tasksUncheckedCreateInput.schema';
import { tasksUpdateInputObjectSchema as tasksUpdateInputObjectSchema } from './objects/tasksUpdateInput.schema';
import { tasksUncheckedUpdateInputObjectSchema as tasksUncheckedUpdateInputObjectSchema } from './objects/tasksUncheckedUpdateInput.schema';

export const tasksUpsertOneSchema: z.ZodType<Prisma.tasksUpsertArgs> = z.object({ select: tasksSelectObjectSchema.optional(), include: tasksIncludeObjectSchema.optional(), where: tasksWhereUniqueInputObjectSchema, create: z.union([ tasksCreateInputObjectSchema, tasksUncheckedCreateInputObjectSchema ]), update: z.union([ tasksUpdateInputObjectSchema, tasksUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tasksUpsertArgs>;

export const tasksUpsertOneZodSchema = z.object({ select: tasksSelectObjectSchema.optional(), include: tasksIncludeObjectSchema.optional(), where: tasksWhereUniqueInputObjectSchema, create: z.union([ tasksCreateInputObjectSchema, tasksUncheckedCreateInputObjectSchema ]), update: z.union([ tasksUpdateInputObjectSchema, tasksUncheckedUpdateInputObjectSchema ]) }).strict();