import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().optional().nullable(),
  label: z.string().optional().nullable(),
  order_index: z.number().int().optional().nullable()
}).strict();
export const shop_sectionsUncheckedCreateWithoutProductsInputObjectSchema: z.ZodType<Prisma.shop_sectionsUncheckedCreateWithoutProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsUncheckedCreateWithoutProductsInput>;
export const shop_sectionsUncheckedCreateWithoutProductsInputObjectZodSchema = makeSchema();
