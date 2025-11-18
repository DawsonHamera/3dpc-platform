import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const recycling_logWhereUniqueInputObjectSchema: z.ZodType<Prisma.recycling_logWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logWhereUniqueInput>;
export const recycling_logWhereUniqueInputObjectZodSchema = makeSchema();
