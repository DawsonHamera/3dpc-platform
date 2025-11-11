import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  session_id: z.literal(true).optional()
}).strict();
export const CustomersAvgAggregateInputObjectSchema: z.ZodType<Prisma.CustomersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomersAvgAggregateInputType>;
export const CustomersAvgAggregateInputObjectZodSchema = makeSchema();
