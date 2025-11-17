import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  size: z.literal(true).optional(),
  uploaded_by: z.literal(true).optional()
}).strict();
export const FileSumAggregateInputObjectSchema: z.ZodType<Prisma.FileSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FileSumAggregateInputType>;
export const FileSumAggregateInputObjectZodSchema = makeSchema();
