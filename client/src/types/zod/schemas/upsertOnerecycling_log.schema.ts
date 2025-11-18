import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { recycling_logSelectObjectSchema as recycling_logSelectObjectSchema } from './objects/recycling_logSelect.schema';
import { recycling_logIncludeObjectSchema as recycling_logIncludeObjectSchema } from './objects/recycling_logInclude.schema';
import { recycling_logWhereUniqueInputObjectSchema as recycling_logWhereUniqueInputObjectSchema } from './objects/recycling_logWhereUniqueInput.schema';
import { recycling_logCreateInputObjectSchema as recycling_logCreateInputObjectSchema } from './objects/recycling_logCreateInput.schema';
import { recycling_logUncheckedCreateInputObjectSchema as recycling_logUncheckedCreateInputObjectSchema } from './objects/recycling_logUncheckedCreateInput.schema';
import { recycling_logUpdateInputObjectSchema as recycling_logUpdateInputObjectSchema } from './objects/recycling_logUpdateInput.schema';
import { recycling_logUncheckedUpdateInputObjectSchema as recycling_logUncheckedUpdateInputObjectSchema } from './objects/recycling_logUncheckedUpdateInput.schema';

export const recycling_logUpsertOneSchema: z.ZodType<Prisma.recycling_logUpsertArgs> = z.object({ select: recycling_logSelectObjectSchema.optional(), include: recycling_logIncludeObjectSchema.optional(), where: recycling_logWhereUniqueInputObjectSchema, create: z.union([ recycling_logCreateInputObjectSchema, recycling_logUncheckedCreateInputObjectSchema ]), update: z.union([ recycling_logUpdateInputObjectSchema, recycling_logUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.recycling_logUpsertArgs>;

export const recycling_logUpsertOneZodSchema = z.object({ select: recycling_logSelectObjectSchema.optional(), include: recycling_logIncludeObjectSchema.optional(), where: recycling_logWhereUniqueInputObjectSchema, create: z.union([ recycling_logCreateInputObjectSchema, recycling_logUncheckedCreateInputObjectSchema ]), update: z.union([ recycling_logUpdateInputObjectSchema, recycling_logUncheckedUpdateInputObjectSchema ]) }).strict();