import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { recycling_logSelectObjectSchema as recycling_logSelectObjectSchema } from './objects/recycling_logSelect.schema';
import { recycling_logIncludeObjectSchema as recycling_logIncludeObjectSchema } from './objects/recycling_logInclude.schema';
import { recycling_logCreateInputObjectSchema as recycling_logCreateInputObjectSchema } from './objects/recycling_logCreateInput.schema';
import { recycling_logUncheckedCreateInputObjectSchema as recycling_logUncheckedCreateInputObjectSchema } from './objects/recycling_logUncheckedCreateInput.schema';

export const recycling_logCreateOneSchema: z.ZodType<Prisma.recycling_logCreateArgs> = z.object({ select: recycling_logSelectObjectSchema.optional(), include: recycling_logIncludeObjectSchema.optional(), data: z.union([recycling_logCreateInputObjectSchema, recycling_logUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.recycling_logCreateArgs>;

export const recycling_logCreateOneZodSchema = z.object({ select: recycling_logSelectObjectSchema.optional(), include: recycling_logIncludeObjectSchema.optional(), data: z.union([recycling_logCreateInputObjectSchema, recycling_logUncheckedCreateInputObjectSchema]) }).strict();