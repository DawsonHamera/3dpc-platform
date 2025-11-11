import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsSelectObjectSchema as materialsSelectObjectSchema } from './objects/materialsSelect.schema';
import { materialsIncludeObjectSchema as materialsIncludeObjectSchema } from './objects/materialsInclude.schema';
import { materialsUpdateInputObjectSchema as materialsUpdateInputObjectSchema } from './objects/materialsUpdateInput.schema';
import { materialsUncheckedUpdateInputObjectSchema as materialsUncheckedUpdateInputObjectSchema } from './objects/materialsUncheckedUpdateInput.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './objects/materialsWhereUniqueInput.schema';

export const materialsUpdateOneSchema: z.ZodType<Prisma.materialsUpdateArgs> = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), data: z.union([materialsUpdateInputObjectSchema, materialsUncheckedUpdateInputObjectSchema]), where: materialsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.materialsUpdateArgs>;

export const materialsUpdateOneZodSchema = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), data: z.union([materialsUpdateInputObjectSchema, materialsUncheckedUpdateInputObjectSchema]), where: materialsWhereUniqueInputObjectSchema }).strict();