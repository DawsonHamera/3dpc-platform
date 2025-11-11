import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsSelectObjectSchema as modelsSelectObjectSchema } from './objects/modelsSelect.schema';
import { modelsIncludeObjectSchema as modelsIncludeObjectSchema } from './objects/modelsInclude.schema';
import { modelsWhereUniqueInputObjectSchema as modelsWhereUniqueInputObjectSchema } from './objects/modelsWhereUniqueInput.schema';

export const modelsFindUniqueSchema: z.ZodType<Prisma.modelsFindUniqueArgs> = z.object({ select: modelsSelectObjectSchema.optional(), include: modelsIncludeObjectSchema.optional(), where: modelsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.modelsFindUniqueArgs>;

export const modelsFindUniqueZodSchema = z.object({ select: modelsSelectObjectSchema.optional(), include: modelsIncludeObjectSchema.optional(), where: modelsWhereUniqueInputObjectSchema }).strict();