import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { attendancesOrderByRelationAggregateInputObjectSchema as attendancesOrderByRelationAggregateInputObjectSchema } from './attendancesOrderByRelationAggregateInput.schema';
import { filesOrderByWithRelationInputObjectSchema as filesOrderByWithRelationInputObjectSchema } from './filesOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { eventsOrderByRelevanceInputObjectSchema as eventsOrderByRelevanceInputObjectSchema } from './eventsOrderByRelevanceInput.schema'

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
  created_by: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  verification_code: SortOrderSchema.optional(),
  attendances: z.lazy(() => attendancesOrderByRelationAggregateInputObjectSchema).optional(),
  files: z.lazy(() => filesOrderByWithRelationInputObjectSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => eventsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const eventsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.eventsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.eventsOrderByWithRelationInput>;
export const eventsOrderByWithRelationInputObjectZodSchema = makeSchema();
