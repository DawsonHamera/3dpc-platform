import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsSelectObjectSchema as stepsSelectObjectSchema } from './objects/stepsSelect.schema';
import { stepsIncludeObjectSchema as stepsIncludeObjectSchema } from './objects/stepsInclude.schema';
import { stepsCreateInputObjectSchema as stepsCreateInputObjectSchema } from './objects/stepsCreateInput.schema';
import { stepsUncheckedCreateInputObjectSchema as stepsUncheckedCreateInputObjectSchema } from './objects/stepsUncheckedCreateInput.schema';

export const stepsCreateOneSchema: z.ZodType<Prisma.stepsCreateArgs> = z.object({ select: stepsSelectObjectSchema.optional(), include: stepsIncludeObjectSchema.optional(), data: z.union([stepsCreateInputObjectSchema, stepsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.stepsCreateArgs>;

export const stepsCreateOneZodSchema = z.object({ select: stepsSelectObjectSchema.optional(), include: stepsIncludeObjectSchema.optional(), data: z.union([stepsCreateInputObjectSchema, stepsUncheckedCreateInputObjectSchema]) }).strict();