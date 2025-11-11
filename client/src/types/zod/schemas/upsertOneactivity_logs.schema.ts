import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsSelectObjectSchema as activity_logsSelectObjectSchema } from './objects/activity_logsSelect.schema';
import { activity_logsIncludeObjectSchema as activity_logsIncludeObjectSchema } from './objects/activity_logsInclude.schema';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './objects/activity_logsWhereUniqueInput.schema';
import { activity_logsCreateInputObjectSchema as activity_logsCreateInputObjectSchema } from './objects/activity_logsCreateInput.schema';
import { activity_logsUncheckedCreateInputObjectSchema as activity_logsUncheckedCreateInputObjectSchema } from './objects/activity_logsUncheckedCreateInput.schema';
import { activity_logsUpdateInputObjectSchema as activity_logsUpdateInputObjectSchema } from './objects/activity_logsUpdateInput.schema';
import { activity_logsUncheckedUpdateInputObjectSchema as activity_logsUncheckedUpdateInputObjectSchema } from './objects/activity_logsUncheckedUpdateInput.schema';

export const activity_logsUpsertOneSchema: z.ZodType<Prisma.activity_logsUpsertArgs> = z.object({ select: activity_logsSelectObjectSchema.optional(), include: activity_logsIncludeObjectSchema.optional(), where: activity_logsWhereUniqueInputObjectSchema, create: z.union([ activity_logsCreateInputObjectSchema, activity_logsUncheckedCreateInputObjectSchema ]), update: z.union([ activity_logsUpdateInputObjectSchema, activity_logsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.activity_logsUpsertArgs>;

export const activity_logsUpsertOneZodSchema = z.object({ select: activity_logsSelectObjectSchema.optional(), include: activity_logsIncludeObjectSchema.optional(), where: activity_logsWhereUniqueInputObjectSchema, create: z.union([ activity_logsCreateInputObjectSchema, activity_logsUncheckedCreateInputObjectSchema ]), update: z.union([ activity_logsUpdateInputObjectSchema, activity_logsUncheckedUpdateInputObjectSchema ]) }).strict();