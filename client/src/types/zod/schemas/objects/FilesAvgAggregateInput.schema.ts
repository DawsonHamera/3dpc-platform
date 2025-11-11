import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  size: z.literal(true).optional(),
  uploaded_by: z.literal(true).optional()
}).strict();
export const FilesAvgAggregateInputObjectSchema: z.ZodType<Prisma.FilesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FilesAvgAggregateInputType>;
export const FilesAvgAggregateInputObjectZodSchema = makeSchema();
