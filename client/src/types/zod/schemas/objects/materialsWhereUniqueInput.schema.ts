import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const materialsWhereUniqueInputObjectSchema: z.ZodType<Prisma.materialsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsWhereUniqueInput>;
export const materialsWhereUniqueInputObjectZodSchema = makeSchema();
