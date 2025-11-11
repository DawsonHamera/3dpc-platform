import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  grade: z.literal(true).optional(),
  description: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GradesCountAggregateInputObjectSchema: z.ZodType<Prisma.GradesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GradesCountAggregateInputType>;
export const GradesCountAggregateInputObjectZodSchema = makeSchema();
