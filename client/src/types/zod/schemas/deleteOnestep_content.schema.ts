import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentSelectObjectSchema as step_contentSelectObjectSchema } from './objects/step_contentSelect.schema';
import { step_contentIncludeObjectSchema as step_contentIncludeObjectSchema } from './objects/step_contentInclude.schema';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './objects/step_contentWhereUniqueInput.schema';

export const step_contentDeleteOneSchema: z.ZodType<Prisma.step_contentDeleteArgs> = z.object({ select: step_contentSelectObjectSchema.optional(), include: step_contentIncludeObjectSchema.optional(), where: step_contentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.step_contentDeleteArgs>;

export const step_contentDeleteOneZodSchema = z.object({ select: step_contentSelectObjectSchema.optional(), include: step_contentIncludeObjectSchema.optional(), where: step_contentWhereUniqueInputObjectSchema }).strict();