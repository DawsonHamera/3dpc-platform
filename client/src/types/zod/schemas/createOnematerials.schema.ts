import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsSelectObjectSchema as materialsSelectObjectSchema } from './objects/materialsSelect.schema';
import { materialsIncludeObjectSchema as materialsIncludeObjectSchema } from './objects/materialsInclude.schema';
import { materialsCreateInputObjectSchema as materialsCreateInputObjectSchema } from './objects/materialsCreateInput.schema';
import { materialsUncheckedCreateInputObjectSchema as materialsUncheckedCreateInputObjectSchema } from './objects/materialsUncheckedCreateInput.schema';

export const materialsCreateOneSchema: z.ZodType<Prisma.materialsCreateArgs> = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), data: z.union([materialsCreateInputObjectSchema, materialsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.materialsCreateArgs>;

export const materialsCreateOneZodSchema = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), data: z.union([materialsCreateInputObjectSchema, materialsUncheckedCreateInputObjectSchema]) }).strict();