import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsWhereInputObjectSchema as activity_logsWhereInputObjectSchema } from './objects/activity_logsWhereInput.schema';

export const activity_logsDeleteManySchema: z.ZodType<Prisma.activity_logsDeleteManyArgs> = z.object({ where: activity_logsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.activity_logsDeleteManyArgs>;

export const activity_logsDeleteManyZodSchema = z.object({ where: activity_logsWhereInputObjectSchema.optional() }).strict();