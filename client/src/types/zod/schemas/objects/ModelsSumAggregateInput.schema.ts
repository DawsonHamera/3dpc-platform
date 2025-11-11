import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  model_file_id: z.literal(true).optional(),
  estimated_duration: z.literal(true).optional(),
  estimated_filament: z.literal(true).optional()
}).strict();
export const ModelsSumAggregateInputObjectSchema: z.ZodType<Prisma.ModelsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelsSumAggregateInputType>;
export const ModelsSumAggregateInputObjectZodSchema = makeSchema();
