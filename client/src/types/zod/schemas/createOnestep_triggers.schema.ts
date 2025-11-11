import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_triggersSelectObjectSchema as step_triggersSelectObjectSchema } from './objects/step_triggersSelect.schema';
import { step_triggersIncludeObjectSchema as step_triggersIncludeObjectSchema } from './objects/step_triggersInclude.schema';
import { step_triggersCreateInputObjectSchema as step_triggersCreateInputObjectSchema } from './objects/step_triggersCreateInput.schema';
import { step_triggersUncheckedCreateInputObjectSchema as step_triggersUncheckedCreateInputObjectSchema } from './objects/step_triggersUncheckedCreateInput.schema';

export const step_triggersCreateOneSchema: z.ZodType<Prisma.step_triggersCreateArgs> = z.object({ select: step_triggersSelectObjectSchema.optional(), include: step_triggersIncludeObjectSchema.optional(), data: z.union([step_triggersCreateInputObjectSchema, step_triggersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.step_triggersCreateArgs>;

export const step_triggersCreateOneZodSchema = z.object({ select: step_triggersSelectObjectSchema.optional(), include: step_triggersIncludeObjectSchema.optional(), data: z.union([step_triggersCreateInputObjectSchema, step_triggersUncheckedCreateInputObjectSchema]) }).strict();