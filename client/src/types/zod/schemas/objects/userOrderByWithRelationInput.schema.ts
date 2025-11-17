import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { attendanceOrderByRelationAggregateInputObjectSchema as attendanceOrderByRelationAggregateInputObjectSchema } from './attendanceOrderByRelationAggregateInput.schema';
import { eventOrderByRelationAggregateInputObjectSchema as eventOrderByRelationAggregateInputObjectSchema } from './eventOrderByRelationAggregateInput.schema';
import { fileOrderByRelationAggregateInputObjectSchema as fileOrderByRelationAggregateInputObjectSchema } from './fileOrderByRelationAggregateInput.schema';
import { roleOrderByWithRelationInputObjectSchema as roleOrderByWithRelationInputObjectSchema } from './roleOrderByWithRelationInput.schema';
import { activity_logOrderByRelationAggregateInputObjectSchema as activity_logOrderByRelationAggregateInputObjectSchema } from './activity_logOrderByRelationAggregateInput.schema';
import { userOrderByRelevanceInputObjectSchema as userOrderByRelevanceInputObjectSchema } from './userOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password_hash: SortOrderSchema.optional(),
  role_id: SortOrderSchema.optional(),
  grade: SortOrderSchema.optional(),
  score: SortOrderSchema.optional(),
  last_active: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  attendances: z.lazy(() => attendanceOrderByRelationAggregateInputObjectSchema).optional(),
  events: z.lazy(() => eventOrderByRelationAggregateInputObjectSchema).optional(),
  files: z.lazy(() => fileOrderByRelationAggregateInputObjectSchema).optional(),
  role: z.lazy(() => roleOrderByWithRelationInputObjectSchema).optional(),
  activity_logs: z.lazy(() => activity_logOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => userOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const userOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.userOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.userOrderByWithRelationInput>;
export const userOrderByWithRelationInputObjectZodSchema = makeSchema();
