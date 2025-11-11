import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { printersOrderByRelationAggregateInputObjectSchema as printersOrderByRelationAggregateInputObjectSchema } from './printersOrderByRelationAggregateInput.schema';
import { printer_statusesOrderByRelevanceInputObjectSchema as printer_statusesOrderByRelevanceInputObjectSchema } from './printer_statusesOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  printers: z.lazy(() => printersOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => printer_statusesOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const printer_statusesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.printer_statusesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesOrderByWithRelationInput>;
export const printer_statusesOrderByWithRelationInputObjectZodSchema = makeSchema();
