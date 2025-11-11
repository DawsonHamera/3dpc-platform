import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const productsWhereUniqueInputObjectSchema: z.ZodType<Prisma.productsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.productsWhereUniqueInput>;
export const productsWhereUniqueInputObjectZodSchema = makeSchema();
