import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100).optional().nullable(),
  label: z.string().max(255).optional().nullable(),
  order_index: z.number().int().optional().nullable()
}).strict();
export const shop_sectionsCreateManyInputObjectSchema: z.ZodType<Prisma.shop_sectionsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsCreateManyInput>;
export const shop_sectionsCreateManyInputObjectZodSchema = makeSchema();
