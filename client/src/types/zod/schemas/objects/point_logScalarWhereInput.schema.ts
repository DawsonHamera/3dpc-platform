import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const point_logscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => point_logScalarWhereInputObjectSchema), z.lazy(() => point_logScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => point_logScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => point_logScalarWhereInputObjectSchema), z.lazy(() => point_logScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  change: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  reason: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  details: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  logged_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const point_logScalarWhereInputObjectSchema: z.ZodType<Prisma.point_logScalarWhereInput> = point_logscalarwhereinputSchema as unknown as z.ZodType<Prisma.point_logScalarWhereInput>;
export const point_logScalarWhereInputObjectZodSchema = point_logscalarwhereinputSchema;
