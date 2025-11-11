import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const ordersWhereUniqueInputObjectSchema: z.ZodType<Prisma.ordersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ordersWhereUniqueInput>;
export const ordersWhereUniqueInputObjectZodSchema = makeSchema();
