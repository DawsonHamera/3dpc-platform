import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const modelsWhereUniqueInputObjectSchema: z.ZodType<Prisma.modelsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.modelsWhereUniqueInput>;
export const modelsWhereUniqueInputObjectZodSchema = makeSchema();
