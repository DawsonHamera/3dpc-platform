import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './objects/stepsWhereInput.schema';

export const stepsDeleteManySchema: z.ZodType<Prisma.stepsDeleteManyArgs> = z.object({ where: stepsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.stepsDeleteManyArgs>;

export const stepsDeleteManyZodSchema = z.object({ where: stepsWhereInputObjectSchema.optional() }).strict();