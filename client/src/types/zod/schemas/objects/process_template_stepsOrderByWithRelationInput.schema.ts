import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { process_templatesOrderByWithRelationInputObjectSchema as process_templatesOrderByWithRelationInputObjectSchema } from './process_templatesOrderByWithRelationInput.schema';
import { stepsOrderByWithRelationInputObjectSchema as stepsOrderByWithRelationInputObjectSchema } from './stepsOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  process_template_id: SortOrderSchema.optional(),
  step_id: SortOrderSchema.optional(),
  step_order: SortOrderSchema.optional(),
  is_required: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  process_templates: z.lazy(() => process_templatesOrderByWithRelationInputObjectSchema).optional(),
  steps: z.lazy(() => stepsOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const process_template_stepsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.process_template_stepsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.process_template_stepsOrderByWithRelationInput>;
export const process_template_stepsOrderByWithRelationInputObjectZodSchema = makeSchema();
