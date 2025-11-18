import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { Enumrecycling_typeWithAggregatesFilterObjectSchema as Enumrecycling_typeWithAggregatesFilterObjectSchema } from './Enumrecycling_typeWithAggregatesFilter.schema';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const recycling_logscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => recycling_logScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => recycling_logScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => recycling_logScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => recycling_logScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => recycling_logScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  type: z.union([z.lazy(() => Enumrecycling_typeWithAggregatesFilterObjectSchema), recycling_typeSchema]).optional(),
  amount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  user_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const recycling_logScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.recycling_logScalarWhereWithAggregatesInput> = recycling_logscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.recycling_logScalarWhereWithAggregatesInput>;
export const recycling_logScalarWhereWithAggregatesInputObjectZodSchema = recycling_logscalarwherewithaggregatesinputSchema;
