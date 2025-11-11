import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  texture_file_id: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  min_temp: z.literal(true).optional(),
  max_temp: z.literal(true).optional(),
  cost: z.literal(true).optional(),
  density: z.literal(true).optional()
}).strict();
export const MaterialsSumAggregateInputObjectSchema: z.ZodType<Prisma.MaterialsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MaterialsSumAggregateInputType>;
export const MaterialsSumAggregateInputObjectZodSchema = makeSchema();
