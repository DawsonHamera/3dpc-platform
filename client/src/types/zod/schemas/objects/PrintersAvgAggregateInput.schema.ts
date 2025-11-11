import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status_id: z.literal(true).optional(),
  image_id: z.literal(true).optional(),
  material_id: z.literal(true).optional(),
  process_template_id: z.literal(true).optional()
}).strict();
export const PrintersAvgAggregateInputObjectSchema: z.ZodType<Prisma.PrintersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.PrintersAvgAggregateInputType>;
export const PrintersAvgAggregateInputObjectZodSchema = makeSchema();
