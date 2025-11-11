import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const shop_sectionsWhereUniqueInputObjectSchema: z.ZodType<Prisma.shop_sectionsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.shop_sectionsWhereUniqueInput>;
export const shop_sectionsWhereUniqueInputObjectZodSchema = makeSchema();
