import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const rolesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.rolesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesAvgOrderByAggregateInput>;
export const rolesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
