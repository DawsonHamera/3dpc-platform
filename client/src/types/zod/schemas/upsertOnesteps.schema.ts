import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsSelectObjectSchema as stepsSelectObjectSchema } from './objects/stepsSelect.schema';
import { stepsIncludeObjectSchema as stepsIncludeObjectSchema } from './objects/stepsInclude.schema';
import { stepsWhereUniqueInputObjectSchema as stepsWhereUniqueInputObjectSchema } from './objects/stepsWhereUniqueInput.schema';
import { stepsCreateInputObjectSchema as stepsCreateInputObjectSchema } from './objects/stepsCreateInput.schema';
import { stepsUncheckedCreateInputObjectSchema as stepsUncheckedCreateInputObjectSchema } from './objects/stepsUncheckedCreateInput.schema';
import { stepsUpdateInputObjectSchema as stepsUpdateInputObjectSchema } from './objects/stepsUpdateInput.schema';
import { stepsUncheckedUpdateInputObjectSchema as stepsUncheckedUpdateInputObjectSchema } from './objects/stepsUncheckedUpdateInput.schema';

export const stepsUpsertOneSchema: z.ZodType<Prisma.stepsUpsertArgs> = z.object({ select: stepsSelectObjectSchema.optional(), include: stepsIncludeObjectSchema.optional(), where: stepsWhereUniqueInputObjectSchema, create: z.union([ stepsCreateInputObjectSchema, stepsUncheckedCreateInputObjectSchema ]), update: z.union([ stepsUpdateInputObjectSchema, stepsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.stepsUpsertArgs>;

export const stepsUpsertOneZodSchema = z.object({ select: stepsSelectObjectSchema.optional(), include: stepsIncludeObjectSchema.optional(), where: stepsWhereUniqueInputObjectSchema, create: z.union([ stepsCreateInputObjectSchema, stepsUncheckedCreateInputObjectSchema ]), update: z.union([ stepsUpdateInputObjectSchema, stepsUncheckedUpdateInputObjectSchema ]) }).strict();