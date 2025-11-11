import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { eventsOrderByRelationAggregateInputObjectSchema as eventsOrderByRelationAggregateInputObjectSchema } from './eventsOrderByRelationAggregateInput.schema';
import { usersOrderByWithRelationInputObjectSchema as usersOrderByWithRelationInputObjectSchema } from './usersOrderByWithRelationInput.schema';
import { materialsOrderByRelationAggregateInputObjectSchema as materialsOrderByRelationAggregateInputObjectSchema } from './materialsOrderByRelationAggregateInput.schema';
import { printersOrderByRelationAggregateInputObjectSchema as printersOrderByRelationAggregateInputObjectSchema } from './printersOrderByRelationAggregateInput.schema';
import { filesOrderByRelevanceInputObjectSchema as filesOrderByRelevanceInputObjectSchema } from './filesOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  original_name: SortOrderSchema.optional(),
  stored_name: SortOrderSchema.optional(),
  mime_type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  size: SortOrderSchema.optional(),
  path: SortOrderSchema.optional(),
  uploaded_by: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: SortOrderSchema.optional(),
  events: z.lazy(() => eventsOrderByRelationAggregateInputObjectSchema).optional(),
  uploader: z.lazy(() => usersOrderByWithRelationInputObjectSchema).optional(),
  materials_materials_image_file_idTofiles: z.lazy(() => materialsOrderByRelationAggregateInputObjectSchema).optional(),
  materials_materials_texture_file_idTofiles: z.lazy(() => materialsOrderByRelationAggregateInputObjectSchema).optional(),
  printers: z.lazy(() => printersOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => filesOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const filesOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.filesOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.filesOrderByWithRelationInput>;
export const filesOrderByWithRelationInputObjectZodSchema = makeSchema();
