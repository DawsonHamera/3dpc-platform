import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { error_reportsSelectObjectSchema as error_reportsSelectObjectSchema } from './objects/error_reportsSelect.schema';
import { error_reportsIncludeObjectSchema as error_reportsIncludeObjectSchema } from './objects/error_reportsInclude.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './objects/error_reportsWhereUniqueInput.schema';
import { error_reportsCreateInputObjectSchema as error_reportsCreateInputObjectSchema } from './objects/error_reportsCreateInput.schema';
import { error_reportsUncheckedCreateInputObjectSchema as error_reportsUncheckedCreateInputObjectSchema } from './objects/error_reportsUncheckedCreateInput.schema';
import { error_reportsUpdateInputObjectSchema as error_reportsUpdateInputObjectSchema } from './objects/error_reportsUpdateInput.schema';
import { error_reportsUncheckedUpdateInputObjectSchema as error_reportsUncheckedUpdateInputObjectSchema } from './objects/error_reportsUncheckedUpdateInput.schema';

export const error_reportsUpsertOneSchema: z.ZodType<Prisma.error_reportsUpsertArgs> = z.object({ select: error_reportsSelectObjectSchema.optional(), include: error_reportsIncludeObjectSchema.optional(), where: error_reportsWhereUniqueInputObjectSchema, create: z.union([ error_reportsCreateInputObjectSchema, error_reportsUncheckedCreateInputObjectSchema ]), update: z.union([ error_reportsUpdateInputObjectSchema, error_reportsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.error_reportsUpsertArgs>;

export const error_reportsUpsertOneZodSchema = z.object({ select: error_reportsSelectObjectSchema.optional(), include: error_reportsIncludeObjectSchema.optional(), where: error_reportsWhereUniqueInputObjectSchema, create: z.union([ error_reportsCreateInputObjectSchema, error_reportsUncheckedCreateInputObjectSchema ]), update: z.union([ error_reportsUpdateInputObjectSchema, error_reportsUncheckedUpdateInputObjectSchema ]) }).strict();