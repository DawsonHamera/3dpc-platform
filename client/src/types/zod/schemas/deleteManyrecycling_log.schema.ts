import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { recycling_logWhereInputObjectSchema as recycling_logWhereInputObjectSchema } from './objects/recycling_logWhereInput.schema';

export const recycling_logDeleteManySchema: z.ZodType<Prisma.recycling_logDeleteManyArgs> = z.object({ where: recycling_logWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.recycling_logDeleteManyArgs>;

export const recycling_logDeleteManyZodSchema = z.object({ where: recycling_logWhereInputObjectSchema.optional() }).strict();