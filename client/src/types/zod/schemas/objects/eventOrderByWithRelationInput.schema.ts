import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { attendanceOrderByRelationAggregateInputObjectSchema as attendanceOrderByRelationAggregateInputObjectSchema } from './attendanceOrderByRelationAggregateInput.schema';
import { fileOrderByWithRelationInputObjectSchema as fileOrderByWithRelationInputObjectSchema } from './fileOrderByWithRelationInput.schema';
import { userOrderByWithRelationInputObjectSchema as userOrderByWithRelationInputObjectSchema } from './userOrderByWithRelationInput.schema';
import { eventOrderByRelevanceInputObjectSchema as eventOrderByRelevanceInputObjectSchema } from './eventOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  location: SortOrderSchema.optional(),
  start_time: SortOrderSchema.optional(),
  end_time: SortOrderSchema.optional(),
  image_file_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_featured: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  event_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verification_code: SortOrderSchema.optional(),
  attendances: z.lazy(() => attendanceOrderByRelationAggregateInputObjectSchema).optional(),
  image_file: z.lazy(() => fileOrderByWithRelationInputObjectSchema).optional(),
  created_by: z.lazy(() => userOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => eventOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const eventOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.eventOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.eventOrderByWithRelationInput>;
export const eventOrderByWithRelationInputObjectZodSchema = makeSchema();
