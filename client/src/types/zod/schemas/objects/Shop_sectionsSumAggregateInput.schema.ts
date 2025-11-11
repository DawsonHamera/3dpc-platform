import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  order_index: z.literal(true).optional()
}).strict();
export const Shop_sectionsSumAggregateInputObjectSchema: z.ZodType<Prisma.Shop_sectionsSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Shop_sectionsSumAggregateInputType>;
export const Shop_sectionsSumAggregateInputObjectZodSchema = makeSchema();
