import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { filesOrderByWithRelationInputObjectSchema as filesOrderByWithRelationInputObjectSchema } from './filesOrderByWithRelationInput.schema';
import { printersOrderByRelationAggregateInputObjectSchema as printersOrderByRelationAggregateInputObjectSchema } from './printersOrderByRelationAggregateInput.schema';
import { materialsOrderByRelevanceInputObjectSchema as materialsOrderByRelevanceInputObjectSchema } from './materialsOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  hex: SortOrderSchema.optional(),
  texture_file_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  image_file_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  type: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  vendor: SortOrderSchema.optional(),
  min_temp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  max_temp: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deleted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  texture_url: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cost: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  cost_unit: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  supplier: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  safety_data: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  density: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  files_materials_image_file_idTofiles: z.lazy(() => filesOrderByWithRelationInputObjectSchema).optional(),
  files_materials_texture_file_idTofiles: z.lazy(() => filesOrderByWithRelationInputObjectSchema).optional(),
  printers: z.lazy(() => printersOrderByRelationAggregateInputObjectSchema).optional(),
  _relevance: z.lazy(() => materialsOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const materialsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.materialsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.materialsOrderByWithRelationInput>;
export const materialsOrderByWithRelationInputObjectZodSchema = makeSchema();
