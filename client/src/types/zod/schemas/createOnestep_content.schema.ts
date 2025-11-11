import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentSelectObjectSchema as step_contentSelectObjectSchema } from './objects/step_contentSelect.schema';
import { step_contentIncludeObjectSchema as step_contentIncludeObjectSchema } from './objects/step_contentInclude.schema';
import { step_contentCreateInputObjectSchema as step_contentCreateInputObjectSchema } from './objects/step_contentCreateInput.schema';
import { step_contentUncheckedCreateInputObjectSchema as step_contentUncheckedCreateInputObjectSchema } from './objects/step_contentUncheckedCreateInput.schema';

export const step_contentCreateOneSchema: z.ZodType<Prisma.step_contentCreateArgs> = z.object({ select: step_contentSelectObjectSchema.optional(), include: step_contentIncludeObjectSchema.optional(), data: z.union([step_contentCreateInputObjectSchema, step_contentUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.step_contentCreateArgs>;

export const step_contentCreateOneZodSchema = z.object({ select: step_contentSelectObjectSchema.optional(), include: step_contentIncludeObjectSchema.optional(), data: z.union([step_contentCreateInputObjectSchema, step_contentUncheckedCreateInputObjectSchema]) }).strict();