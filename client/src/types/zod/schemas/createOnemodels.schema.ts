import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsSelectObjectSchema as modelsSelectObjectSchema } from './objects/modelsSelect.schema';
import { modelsIncludeObjectSchema as modelsIncludeObjectSchema } from './objects/modelsInclude.schema';
import { modelsCreateInputObjectSchema as modelsCreateInputObjectSchema } from './objects/modelsCreateInput.schema';
import { modelsUncheckedCreateInputObjectSchema as modelsUncheckedCreateInputObjectSchema } from './objects/modelsUncheckedCreateInput.schema';

export const modelsCreateOneSchema: z.ZodType<Prisma.modelsCreateArgs> = z.object({ select: modelsSelectObjectSchema.optional(), include: modelsIncludeObjectSchema.optional(), data: z.union([modelsCreateInputObjectSchema, modelsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.modelsCreateArgs>;

export const modelsCreateOneZodSchema = z.object({ select: modelsSelectObjectSchema.optional(), include: modelsIncludeObjectSchema.optional(), data: z.union([modelsCreateInputObjectSchema, modelsUncheckedCreateInputObjectSchema]) }).strict();