import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersSelectObjectSchema as printersSelectObjectSchema } from './objects/printersSelect.schema';
import { printersIncludeObjectSchema as printersIncludeObjectSchema } from './objects/printersInclude.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './objects/printersWhereUniqueInput.schema';
import { printersCreateInputObjectSchema as printersCreateInputObjectSchema } from './objects/printersCreateInput.schema';
import { printersUncheckedCreateInputObjectSchema as printersUncheckedCreateInputObjectSchema } from './objects/printersUncheckedCreateInput.schema';
import { printersUpdateInputObjectSchema as printersUpdateInputObjectSchema } from './objects/printersUpdateInput.schema';
import { printersUncheckedUpdateInputObjectSchema as printersUncheckedUpdateInputObjectSchema } from './objects/printersUncheckedUpdateInput.schema';

export const printersUpsertOneSchema: z.ZodType<Prisma.printersUpsertArgs> = z.object({ select: printersSelectObjectSchema.optional(), include: printersIncludeObjectSchema.optional(), where: printersWhereUniqueInputObjectSchema, create: z.union([ printersCreateInputObjectSchema, printersUncheckedCreateInputObjectSchema ]), update: z.union([ printersUpdateInputObjectSchema, printersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.printersUpsertArgs>;

export const printersUpsertOneZodSchema = z.object({ select: printersSelectObjectSchema.optional(), include: printersIncludeObjectSchema.optional(), where: printersWhereUniqueInputObjectSchema, create: z.union([ printersCreateInputObjectSchema, printersUncheckedCreateInputObjectSchema ]), update: z.union([ printersUpdateInputObjectSchema, printersUncheckedUpdateInputObjectSchema ]) }).strict();