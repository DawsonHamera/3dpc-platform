import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const filesWhereUniqueInputObjectSchema: z.ZodType<Prisma.filesWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.filesWhereUniqueInput>;
export const filesWhereUniqueInputObjectZodSchema = makeSchema();
