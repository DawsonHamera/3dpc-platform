import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logSelectObjectSchema as activity_logSelectObjectSchema } from './objects/activity_logSelect.schema';
import { activity_logIncludeObjectSchema as activity_logIncludeObjectSchema } from './objects/activity_logInclude.schema';
import { activity_logUpdateInputObjectSchema as activity_logUpdateInputObjectSchema } from './objects/activity_logUpdateInput.schema';
import { activity_logUncheckedUpdateInputObjectSchema as activity_logUncheckedUpdateInputObjectSchema } from './objects/activity_logUncheckedUpdateInput.schema';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './objects/activity_logWhereUniqueInput.schema';

export const activity_logUpdateOneSchema: z.ZodType<Prisma.activity_logUpdateArgs> = z.object({ select: activity_logSelectObjectSchema.optional(), include: activity_logIncludeObjectSchema.optional(), data: z.union([activity_logUpdateInputObjectSchema, activity_logUncheckedUpdateInputObjectSchema]), where: activity_logWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.activity_logUpdateArgs>;

export const activity_logUpdateOneZodSchema = z.object({ select: activity_logSelectObjectSchema.optional(), include: activity_logIncludeObjectSchema.optional(), data: z.union([activity_logUpdateInputObjectSchema, activity_logUncheckedUpdateInputObjectSchema]), where: activity_logWhereUniqueInputObjectSchema }).strict();