import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  model_file_id: z.literal(true).optional(),
  material_slots: z.literal(true).optional(),
  estimated_duration: z.literal(true).optional(),
  estimated_filament: z.literal(true).optional(),
  description: z.literal(true).optional(),
  tags: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional()
}).strict();
export const ModelsMinAggregateInputObjectSchema: z.ZodType<Prisma.ModelsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ModelsMinAggregateInputType>;
export const ModelsMinAggregateInputObjectZodSchema = makeSchema();
