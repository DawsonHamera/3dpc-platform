import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const attendancescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => attendanceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => attendanceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => attendanceScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => attendanceScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => attendanceScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  event_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  arrival_time: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const attendanceScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.attendanceScalarWhereWithAggregatesInput> = attendancescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.attendanceScalarWhereWithAggregatesInput>;
export const attendanceScalarWhereWithAggregatesInputObjectZodSchema = attendancescalarwherewithaggregatesinputSchema;
