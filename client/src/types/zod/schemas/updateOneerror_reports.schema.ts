import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsSelectObjectSchema as error_reportsSelectObjectSchema } from './objects/error_reportsSelect.schema';
import { error_reportsIncludeObjectSchema as error_reportsIncludeObjectSchema } from './objects/error_reportsInclude.schema';
import { error_reportsUpdateInputObjectSchema as error_reportsUpdateInputObjectSchema } from './objects/error_reportsUpdateInput.schema';
import { error_reportsUncheckedUpdateInputObjectSchema as error_reportsUncheckedUpdateInputObjectSchema } from './objects/error_reportsUncheckedUpdateInput.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './objects/error_reportsWhereUniqueInput.schema';

export const error_reportsUpdateOneSchema: z.ZodType<Prisma.error_reportsUpdateArgs> = z.object({ select: error_reportsSelectObjectSchema.optional(), include: error_reportsIncludeObjectSchema.optional(), data: z.union([error_reportsUpdateInputObjectSchema, error_reportsUncheckedUpdateInputObjectSchema]), where: error_reportsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.error_reportsUpdateArgs>;

export const error_reportsUpdateOneZodSchema = z.object({ select: error_reportsSelectObjectSchema.optional(), include: error_reportsIncludeObjectSchema.optional(), data: z.union([error_reportsUpdateInputObjectSchema, error_reportsUncheckedUpdateInputObjectSchema]), where: error_reportsWhereUniqueInputObjectSchema }).strict();