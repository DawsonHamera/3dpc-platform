import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status_id: z.literal(true).optional(),
  priority: z.literal(true).optional()
}).strict();
export const RequestsAvgAggregateInputObjectSchema: z.ZodType<Prisma.RequestsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestsAvgAggregateInputType>;
export const RequestsAvgAggregateInputObjectZodSchema = makeSchema();
