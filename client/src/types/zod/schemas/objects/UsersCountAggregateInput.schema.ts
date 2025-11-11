import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  email: z.literal(true).optional(),
  password_hash: z.literal(true).optional(),
  role_id: z.literal(true).optional(),
  grade_id: z.literal(true).optional(),
  score: z.literal(true).optional(),
  last_active: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const UsersCountAggregateInputObjectSchema: z.ZodType<Prisma.UsersCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsersCountAggregateInputType>;
export const UsersCountAggregateInputObjectZodSchema = makeSchema();
