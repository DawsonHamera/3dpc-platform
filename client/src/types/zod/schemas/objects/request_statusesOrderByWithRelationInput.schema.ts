import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { requestsOrderByRelationAggregateInputObjectSchema as requestsOrderByRelationAggregateInputObjectSchema } from './requestsOrderByRelationAggregateInput.schema';
import { request_statusesOrderByRelevanceInputObjectSchema as request_statusesOrderByRelevanceInputObjectSchema } from './request_statusesOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  requests: z.lazy(() => requestsOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => request_statusesOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const request_statusesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.request_statusesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesOrderByWithRelationInput>;
export const request_statusesOrderByWithRelationInputObjectZodSchema = makeSchema();
