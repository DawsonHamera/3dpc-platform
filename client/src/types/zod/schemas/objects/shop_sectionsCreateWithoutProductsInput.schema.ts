import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  name: z.string().max(100).optional().nullable(),
  label: z.string().max(255).optional().nullable(),
  order_index: z.number().int().optional().nullable()
}).strict();
export const shop_sectionsCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.shop_sectionsCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsCreateWithoutProductsInput>;
export const shop_sectionsCreateWithoutProductsInputObjectZodSchema = makeSchema();
