import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  estimated_duration: z.literal(true).optional()
}).strict();
export const Process_templatesAvgAggregateInputObjectSchema: z.ZodType<Prisma.Process_templatesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.Process_templatesAvgAggregateInputType>;
export const Process_templatesAvgAggregateInputObjectZodSchema = makeSchema();
