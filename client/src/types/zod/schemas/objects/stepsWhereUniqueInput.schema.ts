import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const stepsWhereUniqueInputObjectSchema: z.ZodType<Prisma.stepsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.stepsWhereUniqueInput>;
export const stepsWhereUniqueInputObjectZodSchema = makeSchema();
