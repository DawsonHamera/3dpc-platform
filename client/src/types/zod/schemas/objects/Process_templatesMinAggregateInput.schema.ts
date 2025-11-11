import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  description: z.literal(true).optional(),
  version: z.literal(true).optional(),
  category: z.literal(true).optional(),
  estimated_duration: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  updated_at: z.literal(true).optional(),
  deleted_at: z.literal(true).optional()
}).strict();
export const Process_templatesMinAggregateInputObjectSchema: z.ZodType<Prisma.Process_templatesMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_templatesMinAggregateInputType>;
export const Process_templatesMinAggregateInputObjectZodSchema = makeSchema();
