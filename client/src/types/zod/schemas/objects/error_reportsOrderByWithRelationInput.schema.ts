import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { stepsOrderByWithRelationInputObjectSchema as stepsOrderByWithRelationInputObjectSchema } from './stepsOrderByWithRelationInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { tasksOrderByWithRelationInputObjectSchema as tasksOrderByWithRelationInputObjectSchema } from './tasksOrderByWithRelationInput.schema';
import { error_reportsOrderByRelevanceInputObjectSchema as error_reportsOrderByRelevanceInputObjectSchema } from './error_reportsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  task_id: SortOrderSchema.optional(),
  submitted_by: SortOrderSchema.optional(),
  step_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image_url: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  steps: z.lazy(() => stepsOrderByWithRelationInputObjectSchema).optional(),
  users: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => error_reportsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const error_reportsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.error_reportsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsOrderByWithRelationInput>;
export const error_reportsOrderByWithRelationInputObjectZodSchema = makeSchema();
