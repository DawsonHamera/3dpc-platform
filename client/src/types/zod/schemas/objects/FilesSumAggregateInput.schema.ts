import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  size: z.literal(true).optional(),
  uploaded_by: z.literal(true).optional()
}).strict();
export const FilesSumAggregateInputObjectSchema: z.ZodType<Prisma.FilesSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FilesSumAggregateInputType>;
export const FilesSumAggregateInputObjectZodSchema = makeSchema();
