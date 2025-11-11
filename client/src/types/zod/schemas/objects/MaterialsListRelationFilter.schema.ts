import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { materialsWhereInputObjectSchema as materialsWhereInputObjectSchema } from './materialsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => materialsWhereInputObjectSchema).optional(),
  some: z.lazy(() => materialsWhereInputObjectSchema).optional(),
  none: z.lazy(() => materialsWhereInputObjectSchema).optional()
}).strict();
export const MaterialsListRelationFilterObjectSchema: z.ZodType<Prisma.MaterialsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.MaterialsListRelationFilter>;
export const MaterialsListRelationFilterObjectZodSchema = makeSchema();
