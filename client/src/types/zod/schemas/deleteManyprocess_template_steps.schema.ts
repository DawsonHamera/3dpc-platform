import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_template_stepsWhereInputObjectSchema as process_template_stepsWhereInputObjectSchema } from './objects/process_template_stepsWhereInput.schema';

export const process_template_stepsDeleteManySchema: z.ZodType<Prisma.process_template_stepsDeleteManyArgs> = z.object({ where: process_template_stepsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_template_stepsDeleteManyArgs>;

export const process_template_stepsDeleteManyZodSchema = z.object({ where: process_template_stepsWhereInputObjectSchema.optional() }).strict();