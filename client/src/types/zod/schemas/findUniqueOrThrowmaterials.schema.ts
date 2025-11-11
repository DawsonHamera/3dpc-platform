import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsSelectObjectSchema as materialsSelectObjectSchema } from './objects/materialsSelect.schema';
import { materialsIncludeObjectSchema as materialsIncludeObjectSchema } from './objects/materialsInclude.schema';
import { materialsWhereUniqueInputObjectSchema as materialsWhereUniqueInputObjectSchema } from './objects/materialsWhereUniqueInput.schema';

export const materialsFindUniqueOrThrowSchema: z.ZodType<Prisma.materialsFindUniqueOrThrowArgs> = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), where: materialsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.materialsFindUniqueOrThrowArgs>;

export const materialsFindUniqueOrThrowZodSchema = z.object({ select: materialsSelectObjectSchema.optional(), include: materialsIncludeObjectSchema.optional(), where: materialsWhereUniqueInputObjectSchema }).strict();