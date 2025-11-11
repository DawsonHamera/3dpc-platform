import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const process_template_stepsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => process_template_stepsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => process_template_stepsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_template_stepsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_template_stepsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => process_template_stepsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  process_template_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  step_order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  is_required: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const process_template_stepsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.process_template_stepsScalarWhereWithAggregatesInput> = process_template_stepsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.process_template_stepsScalarWhereWithAggregatesInput>;
export const process_template_stepsScalarWhereWithAggregatesInputObjectZodSchema = process_template_stepsscalarwherewithaggregatesinputSchema;
