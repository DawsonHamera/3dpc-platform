import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersSelectObjectSchema as printersSelectObjectSchema } from './objects/printersSelect.schema';
import { printersIncludeObjectSchema as printersIncludeObjectSchema } from './objects/printersInclude.schema';
import { printersUpdateInputObjectSchema as printersUpdateInputObjectSchema } from './objects/printersUpdateInput.schema';
import { printersUncheckedUpdateInputObjectSchema as printersUncheckedUpdateInputObjectSchema } from './objects/printersUncheckedUpdateInput.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './objects/printersWhereUniqueInput.schema';

export const printersUpdateOneSchema: z.ZodType<Prisma.printersUpdateArgs> = z.object({ select: printersSelectObjectSchema.optional(), include: printersIncludeObjectSchema.optional(), data: z.union([printersUpdateInputObjectSchema, printersUncheckedUpdateInputObjectSchema]), where: printersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.printersUpdateArgs>;

export const printersUpdateOneZodSchema = z.object({ select: printersSelectObjectSchema.optional(), include: printersIncludeObjectSchema.optional(), data: z.union([printersUpdateInputObjectSchema, printersUncheckedUpdateInputObjectSchema]), where: printersWhereUniqueInputObjectSchema }).strict();