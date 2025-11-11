import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const order_itemsWhereUniqueInputObjectSchema: z.ZodType<Prisma.order_itemsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.order_itemsWhereUniqueInput>;
export const order_itemsWhereUniqueInputObjectZodSchema = makeSchema();
