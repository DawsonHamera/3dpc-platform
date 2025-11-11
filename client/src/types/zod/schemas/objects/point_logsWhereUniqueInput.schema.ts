import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const point_logsWhereUniqueInputObjectSchema: z.ZodType<Prisma.point_logsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsWhereUniqueInput>;
export const point_logsWhereUniqueInputObjectZodSchema = makeSchema();
