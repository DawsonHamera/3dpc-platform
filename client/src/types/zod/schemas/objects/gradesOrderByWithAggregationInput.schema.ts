import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { gradesCountOrderByAggregateInputObjectSchema as gradesCountOrderByAggregateInputObjectSchema } from './gradesCountOrderByAggregateInput.schema';
import { gradesAvgOrderByAggregateInputObjectSchema as gradesAvgOrderByAggregateInputObjectSchema } from './gradesAvgOrderByAggregateInput.schema';
import { gradesMaxOrderByAggregateInputObjectSchema as gradesMaxOrderByAggregateInputObjectSchema } from './gradesMaxOrderByAggregateInput.schema';
import { gradesMinOrderByAggregateInputObjectSchema as gradesMinOrderByAggregateInputObjectSchema } from './gradesMinOrderByAggregateInput.schema';
import { gradesSumOrderByAggregateInputObjectSchema as gradesSumOrderByAggregateInputObjectSchema } from './gradesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  grade: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => gradesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => gradesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => gradesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => gradesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => gradesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const gradesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.gradesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesOrderByWithAggregationInput>;
export const gradesOrderByWithAggregationInputObjectZodSchema = makeSchema();
