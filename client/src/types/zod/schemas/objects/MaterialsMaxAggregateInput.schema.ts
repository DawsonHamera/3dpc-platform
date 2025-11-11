import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  hex: z.literal(true).optional(),
  texture_file_id: z.literal(true).optional(),
  image_file_id: z.literal(true).optional(),
  type: z.literal(true).optional(),
  vendor: z.literal(true).optional(),
  min_temp: z.literal(true).optional(),
  max_temp: z.literal(true).optional(),
  details: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  texture_url: z.literal(true).optional(),
  cost: z.literal(true).optional(),
  cost_unit: z.literal(true).optional(),
  supplier: z.literal(true).optional(),
  safety_data: z.literal(true).optional(),
  density: z.literal(true).optional()
}).strict();
export const MaterialsMaxAggregateInputObjectSchema: z.ZodType<Prisma.MaterialsMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.MaterialsMaxAggregateInputType>;
export const MaterialsMaxAggregateInputObjectZodSchema = makeSchema();
