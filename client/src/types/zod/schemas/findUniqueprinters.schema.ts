import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersSelectObjectSchema as printersSelectObjectSchema } from './objects/printersSelect.schema';
import { printersIncludeObjectSchema as printersIncludeObjectSchema } from './objects/printersInclude.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './objects/printersWhereUniqueInput.schema';

export const printersFindUniqueSchema: z.ZodType<Prisma.printersFindUniqueArgs> = z.object({ select: printersSelectObjectSchema.optional(), include: printersIncludeObjectSchema.optional(), where: printersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.printersFindUniqueArgs>;

export const printersFindUniqueZodSchema = z.object({ select: printersSelectObjectSchema.optional(), include: printersIncludeObjectSchema.optional(), where: printersWhereUniqueInputObjectSchema }).strict();