import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RolesCountAggregateInputObjectSchema: z.ZodType<Prisma.RolesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RolesCountAggregateInputType>;
export const RolesCountAggregateInputObjectZodSchema = makeSchema();
