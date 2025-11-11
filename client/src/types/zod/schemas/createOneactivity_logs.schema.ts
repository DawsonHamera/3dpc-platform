import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsSelectObjectSchema as activity_logsSelectObjectSchema } from './objects/activity_logsSelect.schema';
import { activity_logsIncludeObjectSchema as activity_logsIncludeObjectSchema } from './objects/activity_logsInclude.schema';
import { activity_logsCreateInputObjectSchema as activity_logsCreateInputObjectSchema } from './objects/activity_logsCreateInput.schema';
import { activity_logsUncheckedCreateInputObjectSchema as activity_logsUncheckedCreateInputObjectSchema } from './objects/activity_logsUncheckedCreateInput.schema';

export const activity_logsCreateOneSchema: z.ZodType<Prisma.activity_logsCreateArgs> = z.object({ select: activity_logsSelectObjectSchema.optional(), include: activity_logsIncludeObjectSchema.optional(), data: z.union([activity_logsCreateInputObjectSchema, activity_logsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.activity_logsCreateArgs>;

export const activity_logsCreateOneZodSchema = z.object({ select: activity_logsSelectObjectSchema.optional(), include: activity_logsIncludeObjectSchema.optional(), data: z.union([activity_logsCreateInputObjectSchema, activity_logsUncheckedCreateInputObjectSchema]) }).strict();