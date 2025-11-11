import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsFindManySchema as productsFindManySchema } from '../findManyproducts.schema';
import { Shop_sectionsCountOutputTypeArgsObjectSchema as Shop_sectionsCountOutputTypeArgsObjectSchema } from './Shop_sectionsCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  products: z.union([z.boolean(), z.lazy(() => productsFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => Shop_sectionsCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const shop_sectionsIncludeObjectSchema: z.ZodType<Prisma.shop_sectionsInclude> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsInclude>;
export const shop_sectionsIncludeObjectZodSchema = makeSchema();
