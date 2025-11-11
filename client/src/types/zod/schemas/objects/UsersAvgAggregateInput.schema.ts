import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  role_id: z.literal(true).optional(),
  grade_id: z.literal(true).optional(),
  score: z.literal(true).optional()
}).strict();
export const UsersAvgAggregateInputObjectSchema: z.ZodType<Prisma.UsersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.UsersAvgAggregateInputType>;
export const UsersAvgAggregateInputObjectZodSchema = makeSchema();
