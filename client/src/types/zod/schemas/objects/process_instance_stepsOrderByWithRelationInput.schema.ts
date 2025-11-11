import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_instancesOrderByWithRelationInputObjectSchema as process_instancesOrderByWithRelationInputObjectSchema } from './process_instancesOrderByWithRelationInput.schema';
import { stepsOrderByWithRelationInputObjectSchema as stepsOrderByWithRelationInputObjectSchema } from './stepsOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { process_instance_stepsOrderByRelevanceInputObjectSchema as process_instance_stepsOrderByRelevanceInputObjectSchema } from './process_instance_stepsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  started_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completed_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  assigned_user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  is_required: SortOrderSchema.optional(),
  input_data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  output_data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  due_date: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_instances: z.lazy(() => process_instancesOrderByWithRelationInputObjectSchema).optional(),
  steps: z.lazy(() => stepsOrderByWithRelationInputObjectSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => process_instance_stepsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const process_instance_stepsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.process_instance_stepsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsOrderByWithRelationInput>;
export const process_instance_stepsOrderByWithRelationInputObjectZodSchema = makeSchema();
