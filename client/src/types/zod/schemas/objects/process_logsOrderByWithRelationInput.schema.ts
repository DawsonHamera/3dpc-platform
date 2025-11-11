import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_instancesOrderByWithRelationInputObjectSchema as process_instancesOrderByWithRelationInputObjectSchema } from './process_instancesOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { process_logsOrderByRelevanceInputObjectSchema as process_logsOrderByRelevanceInputObjectSchema } from './process_logsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_instance_id: SortOrderSchema.optional(),
  step_order: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  level: SortOrderSchema.optional(),
  action: SortOrderSchema.optional(),
  message: SortOrderSchema.optional(),
  data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: SortOrderSchema.optional(),
  process_instances: z.lazy(() => process_instancesOrderByWithRelationInputObjectSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => process_logsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const process_logsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.process_logsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsOrderByWithRelationInput>;
export const process_logsOrderByWithRelationInputObjectZodSchema = makeSchema();
