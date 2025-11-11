import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsSelectObjectSchema as materialsSelectObjectSchema } from './objects/materialsSelect.schema';
import { materialsIncludeObjectSchema as materialsIncludeObjectSchema } from './objects/materialsInclude.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './objects/materialsWhereUniqueInput.schema';

export const materialsFindUniqueSchema: z.ZodType<Prisma.materialsFindUniqueArgs> = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), where: materialsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.materialsFindUniqueArgs>;

export const materialsFindUniqueZodSchema = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), where: materialsWhereUniqueInputObjectSchema }).strict();