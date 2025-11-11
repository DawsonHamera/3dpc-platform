import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  original_name: z.literal(true).optional(),
  stored_name: z.literal(true).optional(),
  mime_type: z.literal(true).optional(),
  size: z.literal(true).optional(),
  path: z.literal(true).optional(),
  uploaded_by: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional(),
  description: z.literal(true).optional(),
  type: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FilesCountAggregateInputObjectSchema: z.ZodType<Prisma.FilesCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FilesCountAggregateInputType>;
export const FilesCountAggregateInputObjectZodSchema = makeSchema();
