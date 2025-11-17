import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const fileWhereUniqueInputObjectSchema: z.ZodType<Prisma.fileWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.fileWhereUniqueInput>;
export const fileWhereUniqueInputObjectZodSchema = makeSchema();
