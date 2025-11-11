import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentWhereInputObjectSchema as step_contentWhereInputObjectSchema } from './objects/step_contentWhereInput.schema';

export const step_contentDeleteManySchema: z.ZodType<Prisma.step_contentDeleteManyArgs> = z.object({ where: step_contentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.step_contentDeleteManyArgs>;

export const step_contentDeleteManyZodSchema = z.object({ where: step_contentWhereInputObjectSchema.optional() }).strict();