import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const printersWhereUniqueInputObjectSchema: z.ZodType<Prisma.printersWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.printersWhereUniqueInput>;
export const printersWhereUniqueInputObjectZodSchema = makeSchema();
