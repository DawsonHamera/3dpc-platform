import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { printer_statusesCountOrderByAggregateInputObjectSchema as printer_statusesCountOrderByAggregateInputObjectSchema } from './printer_statusesCountOrderByAggregateInput.schema';
import { printer_statusesAvgOrderByAggregateInputObjectSchema as printer_statusesAvgOrderByAggregateInputObjectSchema } from './printer_statusesAvgOrderByAggregateInput.schema';
import { printer_statusesMaxOrderByAggregateInputObjectSchema as printer_statusesMaxOrderByAggregateInputObjectSchema } from './printer_statusesMaxOrderByAggregateInput.schema';
import { printer_statusesMinOrderByAggregateInputObjectSchema as printer_statusesMinOrderByAggregateInputObjectSchema } from './printer_statusesMinOrderByAggregateInput.schema';
import { printer_statusesSumOrderByAggregateInputObjectSchema as printer_statusesSumOrderByAggregateInputObjectSchema } from './printer_statusesSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => printer_statusesCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => printer_statusesAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => printer_statusesMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => printer_statusesMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => printer_statusesSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const printer_statusesOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.printer_statusesOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesOrderByWithAggregationInput>;
export const printer_statusesOrderByWithAggregationInputObjectZodSchema = makeSchema();
