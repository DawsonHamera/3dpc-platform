import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsSelectObjectSchema as activity_logsSelectObjectSchema } from './objects/activity_logsSelect.schema';
import { activity_logsIncludeObjectSchema as activity_logsIncludeObjectSchema } from './objects/activity_logsInclude.schema';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './objects/activity_logsWhereUniqueInput.schema';

export const activity_logsDeleteOneSchema: z.ZodType<Prisma.activity_logsDeleteArgs> = z.object({ select: activity_logsSelectObjectSchema.optional(), include: activity_logsIncludeObjectSchema.optional(), where: activity_logsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.activity_logsDeleteArgs>;

export const activity_logsDeleteOneZodSchema = z.object({ select: activity_logsSelectObjectSchema.optional(), include: activity_logsIncludeObjectSchema.optional(), where: activity_logsWhereUniqueInputObjectSchema }).strict();