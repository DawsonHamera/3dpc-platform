import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logsUpdateManyMutationInputObjectSchema as activity_logsUpdateManyMutationInputObjectSchema } from './objects/activity_logsUpdateManyMutationInput.schema';
import { activity_logsWhereInputObjectSchema as activity_logsWhereInputObjectSchema } from './objects/activity_logsWhereInput.schema';

export const activity_logsUpdateManySchema: z.ZodType<Prisma.activity_logsUpdateManyArgs> = z.object({ data: activity_logsUpdateManyMutationInputObjectSchema, where: activity_logsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.activity_logsUpdateManyArgs>;

export const activity_logsUpdateManyZodSchema = z.object({ data: activity_logsUpdateManyMutationInputObjectSchema, where: activity_logsWhereInputObjectSchema.optional() }).strict();