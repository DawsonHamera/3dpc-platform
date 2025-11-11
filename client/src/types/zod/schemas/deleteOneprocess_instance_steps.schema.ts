import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instance_stepsSelectObjectSchema as process_instance_stepsSelectObjectSchema } from './objects/process_instance_stepsSelect.schema';
import { process_instance_stepsIncludeObjectSchema as process_instance_stepsIncludeObjectSchema } from './objects/process_instance_stepsInclude.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './objects/process_instance_stepsWhereUniqueInput.schema';

export const process_instance_stepsDeleteOneSchema: z.ZodType<Prisma.process_instance_stepsDeleteArgs> = z.object({ select: process_instance_stepsSelectObjectSchema.optional(), include: process_instance_stepsIncludeObjectSchema.optional(), where: process_instance_stepsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_instance_stepsDeleteArgs>;

export const process_instance_stepsDeleteOneZodSchema = z.object({ select: process_instance_stepsSelectObjectSchema.optional(), include: process_instance_stepsIncludeObjectSchema.optional(), where: process_instance_stepsWhereUniqueInputObjectSchema }).strict();