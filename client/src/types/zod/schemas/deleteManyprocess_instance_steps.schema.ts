import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instance_stepsWhereInputObjectSchema as process_instance_stepsWhereInputObjectSchema } from './objects/process_instance_stepsWhereInput.schema';

export const process_instance_stepsDeleteManySchema: z.ZodType<Prisma.process_instance_stepsDeleteManyArgs> = z.object({ where: process_instance_stepsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_instance_stepsDeleteManyArgs>;

export const process_instance_stepsDeleteManyZodSchema = z.object({ where: process_instance_stepsWhereInputObjectSchema.optional() }).strict();