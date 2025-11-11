import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status_id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  location: z.literal(true).optional(),
  owner: z.literal(true).optional(),
  details: z.literal(true).optional(),
  image_id: z.literal(true).optional(),
  material_id: z.literal(true).optional(),
  process_template_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional()
}).strict();
export const PrintersMinAggregateInputObjectSchema: z.ZodType<Prisma.PrintersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PrintersMinAggregateInputType>;
export const PrintersMinAggregateInputObjectZodSchema = makeSchema();
