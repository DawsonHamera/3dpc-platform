import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { activity_logUpdateManyMutationInputObjectSchema as activity_logUpdateManyMutationInputObjectSchema } from './objects/activity_logUpdateManyMutationInput.schema';
import { activity_logWhereInputObjectSchema as activity_logWhereInputObjectSchema } from './objects/activity_logWhereInput.schema';

export const activity_logUpdateManySchema: z.ZodType<Prisma.activity_logUpdateManyArgs> = z.object({ data: activity_logUpdateManyMutationInputObjectSchema, where: activity_logWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.activity_logUpdateManyArgs>;

export const activity_logUpdateManyZodSchema = z.object({ data: activity_logUpdateManyMutationInputObjectSchema, where: activity_logWhereInputObjectSchema.optional() }).strict();