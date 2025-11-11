import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { process_instance_stepsSelectObjectSchema as process_instance_stepsSelectObjectSchema } from './objects/process_instance_stepsSelect.schema';
import { process_instance_stepsIncludeObjectSchema as process_instance_stepsIncludeObjectSchema } from './objects/process_instance_stepsInclude.schema';
import { process_instance_stepsCreateInputObjectSchema as process_instance_stepsCreateInputObjectSchema } from './objects/process_instance_stepsCreateInput.schema';
import { process_instance_stepsUncheckedCreateInputObjectSchema as process_instance_stepsUncheckedCreateInputObjectSchema } from './objects/process_instance_stepsUncheckedCreateInput.schema';

export const process_instance_stepsCreateOneSchema: z.ZodType<Prisma.process_instance_stepsCreateArgs> = z.object({ select: process_instance_stepsSelectObjectSchema.optional(), include: process_instance_stepsIncludeObjectSchema.optional(), data: z.union([process_instance_stepsCreateInputObjectSchema, process_instance_stepsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.process_instance_stepsCreateArgs>;

export const process_instance_stepsCreateOneZodSchema = z.object({ select: process_instance_stepsSelectObjectSchema.optional(), include: process_instance_stepsIncludeObjectSchema.optional(), data: z.union([process_instance_stepsCreateInputObjectSchema, process_instance_stepsUncheckedCreateInputObjectSchema]) }).strict();