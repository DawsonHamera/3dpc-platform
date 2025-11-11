import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersSelectObjectSchema as printersSelectObjectSchema } from './objects/printersSelect.schema';
import { printersIncludeObjectSchema as printersIncludeObjectSchema } from './objects/printersInclude.schema';
import { printersCreateInputObjectSchema as printersCreateInputObjectSchema } from './objects/printersCreateInput.schema';
import { printersUncheckedCreateInputObjectSchema as printersUncheckedCreateInputObjectSchema } from './objects/printersUncheckedCreateInput.schema';

export const printersCreateOneSchema: z.ZodType<Prisma.printersCreateArgs> = z.object({ select: printersSelectObjectSchema.optional(), include: printersIncludeObjectSchema.optional(), data: z.union([printersCreateInputObjectSchema, printersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.printersCreateArgs>;

export const printersCreateOneZodSchema = z.object({ select: printersSelectObjectSchema.optional(), include: printersIncludeObjectSchema.optional(), data: z.union([printersCreateInputObjectSchema, printersUncheckedCreateInputObjectSchema]) }).strict();