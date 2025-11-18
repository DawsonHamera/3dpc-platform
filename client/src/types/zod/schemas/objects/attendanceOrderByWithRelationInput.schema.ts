import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { eventOrderByWithRelationInputObjectSchema as eventOrderByWithRelationInputObjectSchema } from './eventOrderByWithRelationInput.schema';
import { userOrderByWithRelationInputObjectSchema as userOrderByWithRelationInputObjectSchema } from './userOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  event_id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  rsvp_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  arrival_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  event: z.lazy(() => eventOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => userOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const attendanceOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.attendanceOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.attendanceOrderByWithRelationInput>;
export const attendanceOrderByWithRelationInputObjectZodSchema = makeSchema();
