import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_templatesOrderByWithRelationInputObjectSchema as process_templatesOrderByWithRelationInputObjectSchema } from './process_templatesOrderByWithRelationInput.schema';
import { filesOrderByWithRelationInputObjectSchema as filesOrderByWithRelationInputObjectSchema } from './filesOrderByWithRelationInput.schema';
import { materialsOrderByWithRelationInputObjectSchema as materialsOrderByWithRelationInputObjectSchema } from './materialsOrderByWithRelationInput.schema';
import { printer_statusesOrderByWithRelationInputObjectSchema as printer_statusesOrderByWithRelationInputObjectSchema } from './printer_statusesOrderByWithRelationInput.schema';
import { tasksOrderByRelationAggregateInputObjectSchema as tasksOrderByRelationAggregateInputObjectSchema } from './tasksOrderByRelationAggregateInput.schema';
import { printersOrderByRelevanceInputObjectSchema as printersOrderByRelevanceInputObjectSchema } from './printersOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status_id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  location: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  owner: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  material_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_template_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  process_templates: z.lazy(() => process_templatesOrderByWithRelationInputObjectSchema).optional(),
  files: z.lazy(() => filesOrderByWithRelationInputObjectSchema).optional(),
  materials: z.lazy(() => materialsOrderByWithRelationInputObjectSchema).optional(),
  printer_statuses: z.lazy(() => printer_statusesOrderByWithRelationInputObjectSchema).optional(),
  tasks: z.lazy(() => tasksOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => printersOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const printersOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.printersOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.printersOrderByWithRelationInput>;
export const printersOrderByWithRelationInputObjectZodSchema = makeSchema();
