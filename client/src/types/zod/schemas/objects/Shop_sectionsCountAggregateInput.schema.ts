import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  label: z.literal(true).optional(),
  order_index: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const Shop_sectionsCountAggregateInputObjectSchema: z.ZodType<Prisma.Shop_sectionsCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Shop_sectionsCountAggregateInputType>;
export const Shop_sectionsCountAggregateInputObjectZodSchema = makeSchema();
