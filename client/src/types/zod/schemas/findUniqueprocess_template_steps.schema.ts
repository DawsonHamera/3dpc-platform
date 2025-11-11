import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_template_stepsSelectObjectSchema as process_template_stepsSelectObjectSchema } from './objects/process_template_stepsSelect.schema';
import { process_template_stepsIncludeObjectSchema as process_template_stepsIncludeObjectSchema } from './objects/process_template_stepsInclude.schema';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './objects/process_template_stepsWhereUniqueInput.schema';

export const process_template_stepsFindUniqueSchema: z.ZodType<Prisma.process_template_stepsFindUniqueArgs> = z.object({ select: process_template_stepsSelectObjectSchema.optional(), include: process_template_stepsIncludeObjectSchema.optional(), where: process_template_stepsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_template_stepsFindUniqueArgs>;

export const process_template_stepsFindUniqueZodSchema = z.object({ select: process_template_stepsSelectObjectSchema.optional(), include: process_template_stepsIncludeObjectSchema.optional(), where: process_template_stepsWhereUniqueInputObjectSchema }).strict();