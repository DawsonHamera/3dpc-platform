import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instance_stepsSelectObjectSchema as process_instance_stepsSelectObjectSchema } from './objects/process_instance_stepsSelect.schema';
import { process_instance_stepsIncludeObjectSchema as process_instance_stepsIncludeObjectSchema } from './objects/process_instance_stepsInclude.schema';
import { process_instance_stepsUpdateInputObjectSchema as process_instance_stepsUpdateInputObjectSchema } from './objects/process_instance_stepsUpdateInput.schema';
import { process_instance_stepsUncheckedUpdateInputObjectSchema as process_instance_stepsUncheckedUpdateInputObjectSchema } from './objects/process_instance_stepsUncheckedUpdateInput.schema';
import { process_instance_stepsWhereUniqueInputObjectSchema as process_instance_stepsWhereUniqueInputObjectSchema } from './objects/process_instance_stepsWhereUniqueInput.schema';

export const process_instance_stepsUpdateOneSchema: z.ZodType<Prisma.process_instance_stepsUpdateArgs> = z.object({ select: process_instance_stepsSelectObjectSchema.optional(), include: process_instance_stepsIncludeObjectSchema.optional(), data: z.union([process_instance_stepsUpdateInputObjectSchema, process_instance_stepsUncheckedUpdateInputObjectSchema]), where: process_instance_stepsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.process_instance_stepsUpdateArgs>;

export const process_instance_stepsUpdateOneZodSchema = z.object({ select: process_instance_stepsSelectObjectSchema.optional(), include: process_instance_stepsIncludeObjectSchema.optional(), data: z.union([process_instance_stepsUpdateInputObjectSchema, process_instance_stepsUncheckedUpdateInputObjectSchema]), where: process_instance_stepsWhereUniqueInputObjectSchema }).strict();