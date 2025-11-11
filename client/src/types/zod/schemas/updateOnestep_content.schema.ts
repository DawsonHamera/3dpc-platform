import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentSelectObjectSchema as step_contentSelectObjectSchema } from './objects/step_contentSelect.schema';
import { step_contentIncludeObjectSchema as step_contentIncludeObjectSchema } from './objects/step_contentInclude.schema';
import { step_contentUpdateInputObjectSchema as step_contentUpdateInputObjectSchema } from './objects/step_contentUpdateInput.schema';
import { step_contentUncheckedUpdateInputObjectSchema as step_contentUncheckedUpdateInputObjectSchema } from './objects/step_contentUncheckedUpdateInput.schema';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './objects/step_contentWhereUniqueInput.schema';

export const step_contentUpdateOneSchema: z.ZodType<Prisma.step_contentUpdateArgs> = z.object({ select: step_contentSelectObjectSchema.optional(), include: step_contentIncludeObjectSchema.optional(), data: z.union([step_contentUpdateInputObjectSchema, step_contentUncheckedUpdateInputObjectSchema]), where: step_contentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.step_contentUpdateArgs>;

export const step_contentUpdateOneZodSchema = z.object({ select: step_contentSelectObjectSchema.optional(), include: step_contentIncludeObjectSchema.optional(), data: z.union([step_contentUpdateInputObjectSchema, step_contentUncheckedUpdateInputObjectSchema]), where: step_contentWhereUniqueInputObjectSchema }).strict();