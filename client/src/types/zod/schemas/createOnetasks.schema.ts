import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tasksSelectObjectSchema as tasksSelectObjectSchema } from './objects/tasksSelect.schema';
import { tasksIncludeObjectSchema as tasksIncludeObjectSchema } from './objects/tasksInclude.schema';
import { tasksCreateInputObjectSchema as tasksCreateInputObjectSchema } from './objects/tasksCreateInput.schema';
import { tasksUncheckedCreateInputObjectSchema as tasksUncheckedCreateInputObjectSchema } from './objects/tasksUncheckedCreateInput.schema';

export const tasksCreateOneSchema: z.ZodType<Prisma.tasksCreateArgs> = z.object({ select: tasksSelectObjectSchema.optional(), include: tasksIncludeObjectSchema.optional(), data: z.union([tasksCreateInputObjectSchema, tasksUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tasksCreateArgs>;

export const tasksCreateOneZodSchema = z.object({ select: tasksSelectObjectSchema.optional(), include: tasksIncludeObjectSchema.optional(), data: z.union([tasksCreateInputObjectSchema, tasksUncheckedCreateInputObjectSchema]) }).strict();