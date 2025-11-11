import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { Enumstep_content_content_typeWithAggregatesFilterObjectSchema as Enumstep_content_content_typeWithAggregatesFilterObjectSchema } from './Enumstep_content_content_typeWithAggregatesFilter.schema';
import { step_content_content_typeSchema } from '../enums/step_content_content_type.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const step_contentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => step_contentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => step_contentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => step_contentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => step_contentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => step_contentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  content_order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  content_type: z.union([z.lazy(() => Enumstep_content_content_typeWithAggregatesFilterObjectSchema), step_content_content_typeSchema]).optional(),
  content_data: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const step_contentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.step_contentScalarWhereWithAggregatesInput> = step_contentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.step_contentScalarWhereWithAggregatesInput>;
export const step_contentScalarWhereWithAggregatesInputObjectZodSchema = step_contentscalarwherewithaggregatesinputSchema;
