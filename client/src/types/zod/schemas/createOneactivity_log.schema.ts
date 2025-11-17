import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logSelectObjectSchema as activity_logSelectObjectSchema } from './objects/activity_logSelect.schema';
import { activity_logIncludeObjectSchema as activity_logIncludeObjectSchema } from './objects/activity_logInclude.schema';
import { activity_logCreateInputObjectSchema as activity_logCreateInputObjectSchema } from './objects/activity_logCreateInput.schema';
import { activity_logUncheckedCreateInputObjectSchema as activity_logUncheckedCreateInputObjectSchema } from './objects/activity_logUncheckedCreateInput.schema';

export const activity_logCreateOneSchema: z.ZodType<Prisma.activity_logCreateArgs> = z.object({ select: activity_logSelectObjectSchema.optional(), include: activity_logIncludeObjectSchema.optional(), data: z.union([activity_logCreateInputObjectSchema, activity_logUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.activity_logCreateArgs>;

export const activity_logCreateOneZodSchema = z.object({ select: activity_logSelectObjectSchema.optional(), include: activity_logIncludeObjectSchema.optional(), data: z.union([activity_logCreateInputObjectSchema, activity_logUncheckedCreateInputObjectSchema]) }).strict();