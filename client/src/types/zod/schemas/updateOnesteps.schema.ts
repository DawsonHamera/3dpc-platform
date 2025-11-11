import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsSelectObjectSchema as stepsSelectObjectSchema } from './objects/stepsSelect.schema';
import { stepsIncludeObjectSchema as stepsIncludeObjectSchema } from './objects/stepsInclude.schema';
import { stepsUpdateInputObjectSchema as stepsUpdateInputObjectSchema } from './objects/stepsUpdateInput.schema';
import { stepsUncheckedUpdateInputObjectSchema as stepsUncheckedUpdateInputObjectSchema } from './objects/stepsUncheckedUpdateInput.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './objects/stepsWhereUniqueInput.schema';

export const stepsUpdateOneSchema: z.ZodType<Prisma.stepsUpdateArgs> = z.object({ select: stepsSelectObjectSchema.optional(), include: stepsIncludeObjectSchema.optional(), data: z.union([stepsUpdateInputObjectSchema, stepsUncheckedUpdateInputObjectSchema]), where: stepsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.stepsUpdateArgs>;

export const stepsUpdateOneZodSchema = z.object({ select: stepsSelectObjectSchema.optional(), include: stepsIncludeObjectSchema.optional(), data: z.union([stepsUpdateInputObjectSchema, stepsUncheckedUpdateInputObjectSchema]), where: stepsWhereUniqueInputObjectSchema }).strict();