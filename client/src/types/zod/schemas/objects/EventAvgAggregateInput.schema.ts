import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  user_id: z.literal(true).optional()
}).strict();
export const EventAvgAggregateInputObjectSchema: z.ZodType<Prisma.EventAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EventAvgAggregateInputType>;
export const EventAvgAggregateInputObjectZodSchema = makeSchema();
