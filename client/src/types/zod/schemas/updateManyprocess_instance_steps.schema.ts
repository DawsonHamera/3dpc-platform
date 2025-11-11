import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instance_stepsUpdateManyMutationInputObjectSchema as process_instance_stepsUpdateManyMutationInputObjectSchema } from './objects/process_instance_stepsUpdateManyMutationInput.schema';
import { process_instance_stepsWhereInputObjectSchema as process_instance_stepsWhereInputObjectSchema } from './objects/process_instance_stepsWhereInput.schema';

export const process_instance_stepsUpdateManySchema: z.ZodType<Prisma.process_instance_stepsUpdateManyArgs> = z.object({ data: process_instance_stepsUpdateManyMutationInputObjectSchema, where: process_instance_stepsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.process_instance_stepsUpdateManyArgs>;

export const process_instance_stepsUpdateManyZodSchema = z.object({ data: process_instance_stepsUpdateManyMutationInputObjectSchema, where: process_instance_stepsWhereInputObjectSchema.optional() }).strict();