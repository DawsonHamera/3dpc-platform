import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const activity_logscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => activity_logScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => activity_logScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => activity_logScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => activity_logScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => activity_logScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  action_type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  table_name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(100)]).optional(),
  record_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  result: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  details: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const activity_logScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.activity_logScalarWhereWithAggregatesInput> = activity_logscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.activity_logScalarWhereWithAggregatesInput>;
export const activity_logScalarWhereWithAggregatesInputObjectZodSchema = activity_logscalarwherewithaggregatesinputSchema;
