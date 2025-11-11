import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  submitted_by: z.literal(true).optional(),
  email: z.literal(true).optional(),
  comments: z.literal(true).optional(),
  status_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  requested_date: z.literal(true).optional(),
  due_date: z.literal(true).optional(),
  priority: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RequestsCountAggregateInputObjectSchema: z.ZodType<Prisma.RequestsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestsCountAggregateInputType>;
export const RequestsCountAggregateInputObjectZodSchema = makeSchema();
