import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const product_variantsWhereUniqueInputObjectSchema: z.ZodType<Prisma.product_variantsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsWhereUniqueInput>;
export const product_variantsWhereUniqueInputObjectZodSchema = makeSchema();
