import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsSelectObjectSchema as materialsSelectObjectSchema } from './objects/materialsSelect.schema';
import { materialsIncludeObjectSchema as materialsIncludeObjectSchema } from './objects/materialsInclude.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './objects/materialsWhereUniqueInput.schema';
import { materialsCreateInputObjectSchema as materialsCreateInputObjectSchema } from './objects/materialsCreateInput.schema';
import { materialsUncheckedCreateInputObjectSchema as materialsUncheckedCreateInputObjectSchema } from './objects/materialsUncheckedCreateInput.schema';
import { materialsUpdateInputObjectSchema as materialsUpdateInputObjectSchema } from './objects/materialsUpdateInput.schema';
import { materialsUncheckedUpdateInputObjectSchema as materialsUncheckedUpdateInputObjectSchema } from './objects/materialsUncheckedUpdateInput.schema';

export const materialsUpsertOneSchema: z.ZodType<Prisma.materialsUpsertArgs> = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), where: materialsWhereUniqueInputObjectSchema, create: z.union([ materialsCreateInputObjectSchema, materialsUncheckedCreateInputObjectSchema ]), update: z.union([ materialsUpdateInputObjectSchema, materialsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.materialsUpsertArgs>;

export const materialsUpsertOneZodSchema = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), where: materialsWhereUniqueInputObjectSchema, create: z.union([ materialsCreateInputObjectSchema, materialsUncheckedCreateInputObjectSchema ]), update: z.union([ materialsUpdateInputObjectSchema, materialsUncheckedUpdateInputObjectSchema ]) }).strict();