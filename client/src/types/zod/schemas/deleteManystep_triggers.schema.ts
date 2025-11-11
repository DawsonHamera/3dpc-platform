import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersWhereInputObjectSchema as step_triggersWhereInputObjectSchema } from './objects/step_triggersWhereInput.schema';

export const step_triggersDeleteManySchema: z.ZodType<Prisma.step_triggersDeleteManyArgs> = z.object({ where: step_triggersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.step_triggersDeleteManyArgs>;

export const step_triggersDeleteManyZodSchema = z.object({ where: step_triggersWhereInputObjectSchema.optional() }).strict();