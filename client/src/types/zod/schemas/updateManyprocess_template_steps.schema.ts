import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_template_stepsUpdateManyMutationInputObjectSchema as process_template_stepsUpdateManyMutationInputObjectSchema } from './objects/process_template_stepsUpdateManyMutationInput.schema';
import { process_template_stepsWhereInputObjectSchema as process_template_stepsWhereInputObjectSchema } from './objects/process_template_stepsWhereInput.schema';

export const process_template_stepsUpdateManySchema: z.ZodType<Prisma.process_template_stepsUpdateManyArgs> = z.object({ data: process_template_stepsUpdateManyMutationInputObjectSchema, where: process_template_stepsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_template_stepsUpdateManyArgs>;

export const process_template_stepsUpdateManyZodSchema = z.object({ data: process_template_stepsUpdateManyMutationInputObjectSchema, where: process_template_stepsWhereInputObjectSchema.optional() }).strict();