import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  assigned_user_id: SortOrderSchema.optional()
}).strict();
export const process_instance_stepsAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.process_instance_stepsAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsAvgOrderByAggregateInput>;
export const process_instance_stepsAvgOrderByAggregateInputObjectZodSchema = makeSchema();
