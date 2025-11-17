import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logSelectObjectSchema as activity_logSelectObjectSchema } from './objects/activity_logSelect.schema';
import { activity_logIncludeObjectSchema as activity_logIncludeObjectSchema } from './objects/activity_logInclude.schema';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './objects/activity_logWhereUniqueInput.schema';

export const activity_logDeleteOneSchema: z.ZodType<Prisma.activity_logDeleteArgs> = z.object({ select: activity_logSelectObjectSchema.optional(), include: activity_logIncludeObjectSchema.optional(), where: activity_logWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.activity_logDeleteArgs>;

export const activity_logDeleteOneZodSchema = z.object({ select: activity_logSelectObjectSchema.optional(), include: activity_logIncludeObjectSchema.optional(), where: activity_logWhereUniqueInputObjectSchema }).strict();