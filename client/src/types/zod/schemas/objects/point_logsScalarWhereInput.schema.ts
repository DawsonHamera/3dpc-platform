import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const point_logsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => point_logsScalarWhereInputObjectSchema), z.lazy(() => point_logsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => point_logsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => point_logsScalarWhereInputObjectSchema), z.lazy(() => point_logsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  change: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logged_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const point_logsScalarWhereInputObjectSchema: z.ZodType<Prisma.point_logsScalarWhereInput> = point_logsscalarwhereinputSchema as unknown as z.ZodType<Prisma.point_logsScalarWhereInput>;
export const point_logsScalarWhereInputObjectZodSchema = point_logsscalarwhereinputSchema;
