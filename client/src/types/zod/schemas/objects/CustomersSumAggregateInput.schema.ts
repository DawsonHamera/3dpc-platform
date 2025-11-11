import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  session_id: z.literal(true).optional()
}).strict();
export const CustomersSumAggregateInputObjectSchema: z.ZodType<Prisma.CustomersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.CustomersSumAggregateInputType>;
export const CustomersSumAggregateInputObjectZodSchema = makeSchema();
