import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const point_logWhereUniqueInputObjectSchema: z.ZodType<Prisma.point_logWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logWhereUniqueInput>;
export const point_logWhereUniqueInputObjectZodSchema = makeSchema();
