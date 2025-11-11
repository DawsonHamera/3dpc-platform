import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  estimated_duration: SortOrderSchema.optional()
}).strict();
export const process_templatesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_templatesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesAvgOrderByAggregateInput>;
export const process_templatesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
