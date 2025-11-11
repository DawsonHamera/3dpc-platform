import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { step_contentSelectObjectSchema as step_contentSelectObjectSchema } from './objects/step_contentSelect.schema';
import { step_contentIncludeObjectSchema as step_contentIncludeObjectSchema } from './objects/step_contentInclude.schema';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './objects/step_contentWhereUniqueInput.schema';
import { step_contentCreateInputObjectSchema as step_contentCreateInputObjectSchema } from './objects/step_contentCreateInput.schema';
import { step_contentUncheckedCreateInputObjectSchema as step_contentUncheckedCreateInputObjectSchema } from './objects/step_contentUncheckedCreateInput.schema';
import { step_contentUpdateInputObjectSchema as step_contentUpdateInputObjectSchema } from './objects/step_contentUpdateInput.schema';
import { step_contentUncheckedUpdateInputObjectSchema as step_contentUncheckedUpdateInputObjectSchema } from './objects/step_contentUncheckedUpdateInput.schema';

export const step_contentUpsertOneSchema: z.ZodType<Prisma.step_contentUpsertArgs> = z.object({ select: step_contentSelectObjectSchema.optional(), include: step_contentIncludeObjectSchema.optional(), where: step_contentWhereUniqueInputObjectSchema, create: z.union([ step_contentCreateInputObjectSchema, step_contentUncheckedCreateInputObjectSchema ]), update: z.union([ step_contentUpdateInputObjectSchema, step_contentUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.step_contentUpsertArgs>;

export const step_contentUpsertOneZodSchema = z.object({ select: step_contentSelectObjectSchema.optional(), include: step_contentIncludeObjectSchema.optional(), where: step_contentWhereUniqueInputObjectSchema, create: z.union([ step_contentCreateInputObjectSchema, step_contentUncheckedCreateInputObjectSchema ]), update: z.union([ step_contentUpdateInputObjectSchema, step_contentUncheckedUpdateInputObjectSchema ]) }).strict();