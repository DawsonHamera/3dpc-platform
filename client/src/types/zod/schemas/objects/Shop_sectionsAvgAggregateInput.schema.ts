import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order_index: z.literal(true).optional()
}).strict();
export const Shop_sectionsAvgAggregateInputObjectSchema: z.ZodType<Prisma.Shop_sectionsAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Shop_sectionsAvgAggregateInputType>;
export const Shop_sectionsAvgAggregateInputObjectZodSchema = makeSchema();
