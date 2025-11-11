import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsFindManySchema as productsFindManySchema } from '../findManyproducts.schema';
import { Shop_sectionsCountOutputTypeArgsObjectSchema as Shop_sectionsCountOutputTypeArgsObjectSchema } from './Shop_sectionsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  label: z.boolean().optional(),
  order_index: z.boolean().optional(),
  products: z.union([z.boolean(), z.lazy(() => productsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Shop_sectionsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const shop_sectionsSelectObjectSchema: z.ZodType<Prisma.shop_sectionsSelect> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsSelect>;
export const shop_sectionsSelectObjectZodSchema = makeSchema();
