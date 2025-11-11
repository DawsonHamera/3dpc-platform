import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsSelectObjectSchema as modelsSelectObjectSchema } from './objects/modelsSelect.schema';
import { modelsIncludeObjectSchema as modelsIncludeObjectSchema } from './objects/modelsInclude.schema';
import { modelsUpdateInputObjectSchema as modelsUpdateInputObjectSchema } from './objects/modelsUpdateInput.schema';
import { modelsUncheckedUpdateInputObjectSchema as modelsUncheckedUpdateInputObjectSchema } from './objects/modelsUncheckedUpdateInput.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './objects/modelsWhereUniqueInput.schema';

export const modelsUpdateOneSchema: z.ZodType<Prisma.modelsUpdateArgs> = z.object({ select: modelsSelectObjectSchema.optional(), include: modelsIncludeObjectSchema.optional(), data: z.union([modelsUpdateInputObjectSchema, modelsUncheckedUpdateInputObjectSchema]), where: modelsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.modelsUpdateArgs>;

export const modelsUpdateOneZodSchema = z.object({ select: modelsSelectObjectSchema.optional(), include: modelsIncludeObjectSchema.optional(), data: z.union([modelsUpdateInputObjectSchema, modelsUncheckedUpdateInputObjectSchema]), where: modelsWhereUniqueInputObjectSchema }).strict();