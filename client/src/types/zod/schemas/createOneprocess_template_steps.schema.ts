import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_template_stepsSelectObjectSchema as process_template_stepsSelectObjectSchema } from './objects/process_template_stepsSelect.schema';
import { process_template_stepsIncludeObjectSchema as process_template_stepsIncludeObjectSchema } from './objects/process_template_stepsInclude.schema';
import { process_template_stepsCreateInputObjectSchema as process_template_stepsCreateInputObjectSchema } from './objects/process_template_stepsCreateInput.schema';
import { process_template_stepsUncheckedCreateInputObjectSchema as process_template_stepsUncheckedCreateInputObjectSchema } from './objects/process_template_stepsUncheckedCreateInput.schema';

export const process_template_stepsCreateOneSchema: z.ZodType<Prisma.process_template_stepsCreateArgs> = z.object({ select: process_template_stepsSelectObjectSchema.optional(), include: process_template_stepsIncludeObjectSchema.optional(), data: z.union([process_template_stepsCreateInputObjectSchema, process_template_stepsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.process_template_stepsCreateArgs>;

export const process_template_stepsCreateOneZodSchema = z.object({ select: process_template_stepsSelectObjectSchema.optional(), include: process_template_stepsIncludeObjectSchema.optional(), data: z.union([process_template_stepsCreateInputObjectSchema, process_template_stepsUncheckedCreateInputObjectSchema]) }).strict();