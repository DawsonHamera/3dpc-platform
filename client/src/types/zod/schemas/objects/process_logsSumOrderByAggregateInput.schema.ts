import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional()
}).strict();
export const process_logsSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_logsSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsSumOrderByAggregateInput>;
export const process_logsSumOrderByAggregateInputObjectZodSchema = makeSchema();
