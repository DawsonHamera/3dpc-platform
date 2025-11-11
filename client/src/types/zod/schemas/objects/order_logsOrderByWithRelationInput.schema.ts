import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ordersOrderByWithRelationInputObjectSchema as ordersOrderByWithRelationInputObjectSchema } from './ordersOrderByWithRelationInput.schema';
import { order_logsOrderByRelevanceInputObjectSchema as order_logsOrderByRelevanceInputObjectSchema } from './order_logsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  order_id: SortOrderSchema.optional(),
  log_timestamp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  log_message: SortOrderSchema.optional(),
  log_details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  orders: z.lazy(() => ordersOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => order_logsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const order_logsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.order_logsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.order_logsOrderByWithRelationInput>;
export const order_logsOrderByWithRelationInputObjectZodSchema = makeSchema();
