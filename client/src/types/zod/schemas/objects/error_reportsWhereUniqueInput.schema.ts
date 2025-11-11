import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional()
}).strict();
export const error_reportsWhereUniqueInputObjectSchema: z.ZodType<Prisma.error_reportsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsWhereUniqueInput>;
export const error_reportsWhereUniqueInputObjectZodSchema = makeSchema();
