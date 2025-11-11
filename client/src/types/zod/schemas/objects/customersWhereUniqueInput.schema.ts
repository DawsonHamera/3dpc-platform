import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const customersWhereUniqueInputObjectSchema: z.ZodType<Prisma.customersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.customersWhereUniqueInput>;
export const customersWhereUniqueInputObjectZodSchema = makeSchema();
