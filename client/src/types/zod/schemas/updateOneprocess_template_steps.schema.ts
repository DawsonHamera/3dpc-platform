import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_template_stepsSelectObjectSchema as process_template_stepsSelectObjectSchema } from './objects/process_template_stepsSelect.schema';
import { process_template_stepsIncludeObjectSchema as process_template_stepsIncludeObjectSchema } from './objects/process_template_stepsInclude.schema';
import { process_template_stepsUpdateInputObjectSchema as process_template_stepsUpdateInputObjectSchema } from './objects/process_template_stepsUpdateInput.schema';
import { process_template_stepsUncheckedUpdateInputObjectSchema as process_template_stepsUncheckedUpdateInputObjectSchema } from './objects/process_template_stepsUncheckedUpdateInput.schema';
import { process_template_stepsWhereUniqueInputObjectSchema as process_template_stepsWhereUniqueInputObjectSchema } from './objects/process_template_stepsWhereUniqueInput.schema';

export const process_template_stepsUpdateOneSchema: z.ZodType<Prisma.process_template_stepsUpdateArgs> = z.object({ select: process_template_stepsSelectObjectSchema.optional(), include: process_template_stepsIncludeObjectSchema.optional(), data: z.union([process_template_stepsUpdateInputObjectSchema, process_template_stepsUncheckedUpdateInputObjectSchema]), where: process_template_stepsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_template_stepsUpdateArgs>;

export const process_template_stepsUpdateOneZodSchema = z.object({ select: process_template_stepsSelectObjectSchema.optional(), include: process_template_stepsIncludeObjectSchema.optional(), data: z.union([process_template_stepsUpdateInputObjectSchema, process_template_stepsUncheckedUpdateInputObjectSchema]), where: process_template_stepsWhereUniqueInputObjectSchema }).strict();