import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logWhereInputObjectSchema as activity_logWhereInputObjectSchema } from './objects/activity_logWhereInput.schema';

export const activity_logDeleteManySchema: z.ZodType<Prisma.activity_logDeleteManyArgs> = z.object({ where: activity_logWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.activity_logDeleteManyArgs>;

export const activity_logDeleteManyZodSchema = z.object({ where: activity_logWhereInputObjectSchema.optional() }).strict();