import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const error_reportsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => error_reportsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => error_reportsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => error_reportsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => error_reportsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => error_reportsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  task_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  submitted_by: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  image_url: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(255)]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const error_reportsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.error_reportsScalarWhereWithAggregatesInput> = error_reportsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.error_reportsScalarWhereWithAggregatesInput>;
export const error_reportsScalarWhereWithAggregatesInputObjectZodSchema = error_reportsscalarwherewithaggregatesinputSchema;
