import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './materialsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => materialsWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => materialsWhereInputObjectSchema).optional().nullable()
}).strict();
export const MaterialsNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.MaterialsNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MaterialsNullableScalarRelationFilter>;
export const MaterialsNullableScalarRelationFilterObjectZodSchema = makeSchema();
