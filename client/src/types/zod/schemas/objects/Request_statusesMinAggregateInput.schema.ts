import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional()
}).strict();
export const Request_statusesMinAggregateInputObjectSchema: z.ZodType<Prisma.Request_statusesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Request_statusesMinAggregateInputType>;
export const Request_statusesMinAggregateInputObjectZodSchema = makeSchema();
