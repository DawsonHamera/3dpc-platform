import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsSelectObjectSchema as activity_logsSelectObjectSchema } from './objects/activity_logsSelect.schema';
import { activity_logsIncludeObjectSchema as activity_logsIncludeObjectSchema } from './objects/activity_logsInclude.schema';
import { activity_logsUpdateInputObjectSchema as activity_logsUpdateInputObjectSchema } from './objects/activity_logsUpdateInput.schema';
import { activity_logsUncheckedUpdateInputObjectSchema as activity_logsUncheckedUpdateInputObjectSchema } from './objects/activity_logsUncheckedUpdateInput.schema';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './objects/activity_logsWhereUniqueInput.schema';

export const activity_logsUpdateOneSchema: z.ZodType<Prisma.activity_logsUpdateArgs> = z.object({ select: activity_logsSelectObjectSchema.optional(), include: activity_logsIncludeObjectSchema.optional(), data: z.union([activity_logsUpdateInputObjectSchema, activity_logsUncheckedUpdateInputObjectSchema]), where: activity_logsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.activity_logsUpdateArgs>;

export const activity_logsUpdateOneZodSchema = z.object({ select: activity_logsSelectObjectSchema.optional(), include: activity_logsIncludeObjectSchema.optional(), data: z.union([activity_logsUpdateInputObjectSchema, activity_logsUncheckedUpdateInputObjectSchema]), where: activity_logsWhereUniqueInputObjectSchema }).strict();