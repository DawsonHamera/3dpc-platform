import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  created_by: z.literal(true).optional()
}).strict();
export const EventSumAggregateInputObjectSchema: z.ZodType<Prisma.EventSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventSumAggregateInputType>;
export const EventSumAggregateInputObjectZodSchema = makeSchema();
