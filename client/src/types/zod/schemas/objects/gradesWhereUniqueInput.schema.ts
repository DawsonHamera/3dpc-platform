import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const gradesWhereUniqueInputObjectSchema: z.ZodType<Prisma.gradesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesWhereUniqueInput>;
export const gradesWhereUniqueInputObjectZodSchema = makeSchema();
