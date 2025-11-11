import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { printersOrderByRelationAggregateInputObjectSchema as printersOrderByRelationAggregateInputObjectSchema } from './printersOrderByRelationAggregateInput.schema';
import { process_instancesOrderByRelationAggregateInputObjectSchema as process_instancesOrderByRelationAggregateInputObjectSchema } from './process_instancesOrderByRelationAggregateInput.schema';
import { process_template_stepsOrderByRelationAggregateInputObjectSchema as process_template_stepsOrderByRelationAggregateInputObjectSchema } from './process_template_stepsOrderByRelationAggregateInput.schema';
import { process_templatesOrderByRelevanceInputObjectSchema as process_templatesOrderByRelevanceInputObjectSchema } from './process_templatesOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  version: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  category: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  estimated_duration: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  printers: z.lazy(() => printersOrderByRelationAggregateInputObjectSchema).optional(),
  process_instances: z.lazy(() => process_instancesOrderByRelationAggregateInputObjectSchema).optional(),
  process_template_steps: z.lazy(() => process_template_stepsOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => process_templatesOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const process_templatesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.process_templatesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_templatesOrderByWithRelationInput>;
export const process_templatesOrderByWithRelationInputObjectZodSchema = makeSchema();
