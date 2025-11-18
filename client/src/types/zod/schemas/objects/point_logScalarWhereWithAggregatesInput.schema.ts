import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const point_logscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => point_logScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => point_logScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => point_logScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => point_logScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => point_logScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  change: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  details: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  logged_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const point_logScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.point_logScalarWhereWithAggregatesInput> = point_logscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.point_logScalarWhereWithAggregatesInput>;
export const point_logScalarWhereWithAggregatesInputObjectZodSchema = point_logscalarwherewithaggregatesinputSchema;
