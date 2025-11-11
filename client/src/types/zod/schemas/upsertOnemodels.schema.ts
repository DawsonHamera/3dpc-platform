import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsSelectObjectSchema as modelsSelectObjectSchema } from './objects/modelsSelect.schema';
import { modelsIncludeObjectSchema as modelsIncludeObjectSchema } from './objects/modelsInclude.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './objects/modelsWhereUniqueInput.schema';
import { modelsCreateInputObjectSchema as modelsCreateInputObjectSchema } from './objects/modelsCreateInput.schema';
import { modelsUncheckedCreateInputObjectSchema as modelsUncheckedCreateInputObjectSchema } from './objects/modelsUncheckedCreateInput.schema';
import { modelsUpdateInputObjectSchema as modelsUpdateInputObjectSchema } from './objects/modelsUpdateInput.schema';
import { modelsUncheckedUpdateInputObjectSchema as modelsUncheckedUpdateInputObjectSchema } from './objects/modelsUncheckedUpdateInput.schema';

export const modelsUpsertOneSchema: z.ZodType<Prisma.modelsUpsertArgs> = z.object({ select: modelsSelectObjectSchema.optional(), include: modelsIncludeObjectSchema.optional(), where: modelsWhereUniqueInputObjectSchema, create: z.union([ modelsCreateInputObjectSchema, modelsUncheckedCreateInputObjectSchema ]), update: z.union([ modelsUpdateInputObjectSchema, modelsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.modelsUpsertArgs>;

export const modelsUpsertOneZodSchema = z.object({ select: modelsSelectObjectSchema.optional(), include: modelsIncludeObjectSchema.optional(), where: modelsWhereUniqueInputObjectSchema, create: z.union([ modelsCreateInputObjectSchema, modelsUncheckedCreateInputObjectSchema ]), update: z.union([ modelsUpdateInputObjectSchema, modelsUncheckedUpdateInputObjectSchema ]) }).strict();