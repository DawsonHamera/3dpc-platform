import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsSelectObjectSchema as error_reportsSelectObjectSchema } from './objects/error_reportsSelect.schema';
import { error_reportsIncludeObjectSchema as error_reportsIncludeObjectSchema } from './objects/error_reportsInclude.schema';
import { error_reportsCreateInputObjectSchema as error_reportsCreateInputObjectSchema } from './objects/error_reportsCreateInput.schema';
import { error_reportsUncheckedCreateInputObjectSchema as error_reportsUncheckedCreateInputObjectSchema } from './objects/error_reportsUncheckedCreateInput.schema';

export const error_reportsCreateOneSchema: z.ZodType<Prisma.error_reportsCreateArgs> = z.object({ select: error_reportsSelectObjectSchema.optional(), include: error_reportsIncludeObjectSchema.optional(), data: z.union([error_reportsCreateInputObjectSchema, error_reportsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.error_reportsCreateArgs>;

export const error_reportsCreateOneZodSchema = z.object({ select: error_reportsSelectObjectSchema.optional(), include: error_reportsIncludeObjectSchema.optional(), data: z.union([error_reportsCreateInputObjectSchema, error_reportsUncheckedCreateInputObjectSchema]) }).strict();