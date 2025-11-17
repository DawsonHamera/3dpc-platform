import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logSelectObjectSchema as activity_logSelectObjectSchema } from './objects/activity_logSelect.schema';
import { activity_logIncludeObjectSchema as activity_logIncludeObjectSchema } from './objects/activity_logInclude.schema';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './objects/activity_logWhereUniqueInput.schema';
import { activity_logCreateInputObjectSchema as activity_logCreateInputObjectSchema } from './objects/activity_logCreateInput.schema';
import { activity_logUncheckedCreateInputObjectSchema as activity_logUncheckedCreateInputObjectSchema } from './objects/activity_logUncheckedCreateInput.schema';
import { activity_logUpdateInputObjectSchema as activity_logUpdateInputObjectSchema } from './objects/activity_logUpdateInput.schema';
import { activity_logUncheckedUpdateInputObjectSchema as activity_logUncheckedUpdateInputObjectSchema } from './objects/activity_logUncheckedUpdateInput.schema';

export const activity_logUpsertOneSchema: z.ZodType<Prisma.activity_logUpsertArgs> = z.object({ select: activity_logSelectObjectSchema.optional(), include: activity_logIncludeObjectSchema.optional(), where: activity_logWhereUniqueInputObjectSchema, create: z.union([ activity_logCreateInputObjectSchema, activity_logUncheckedCreateInputObjectSchema ]), update: z.union([ activity_logUpdateInputObjectSchema, activity_logUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.activity_logUpsertArgs>;

export const activity_logUpsertOneZodSchema = z.object({ select: activity_logSelectObjectSchema.optional(), include: activity_logIncludeObjectSchema.optional(), where: activity_logWhereUniqueInputObjectSchema, create: z.union([ activity_logCreateInputObjectSchema, activity_logUncheckedCreateInputObjectSchema ]), update: z.union([ activity_logUpdateInputObjectSchema, activity_logUncheckedUpdateInputObjectSchema ]) }).strict();