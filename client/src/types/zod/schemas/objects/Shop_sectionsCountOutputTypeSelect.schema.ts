import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  products: z.boolean().optional()
}).strict();
export const Shop_sectionsCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.Shop_sectionsCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.Shop_sectionsCountOutputTypeSelect>;
export const Shop_sectionsCountOutputTypeSelectObjectZodSchema = makeSchema();
