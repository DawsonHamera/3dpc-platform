import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  created_by: z.literal(true).optional()
}).strict();
export const EventsSumAggregateInputObjectSchema: z.ZodType<Prisma.EventsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventsSumAggregateInputType>;
export const EventsSumAggregateInputObjectZodSchema = makeSchema();
