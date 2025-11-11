import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status_id: z.literal(true).optional(),
  priority: z.literal(true).optional()
}).strict();
export const RequestsSumAggregateInputObjectSchema: z.ZodType<Prisma.RequestsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RequestsSumAggregateInputType>;
export const RequestsSumAggregateInputObjectZodSchema = makeSchema();
