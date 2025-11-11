import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { eventsOrderByWithRelationInputObjectSchema as eventsOrderByWithRelationInputObjectSchema } from './eventsOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  event_id: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  arrival_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  event: z.lazy(() => eventsOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const attendancesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.attendancesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.attendancesOrderByWithRelationInput>;
export const attendancesOrderByWithRelationInputObjectZodSchema = makeSchema();
