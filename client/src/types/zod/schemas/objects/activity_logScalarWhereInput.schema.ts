import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const activity_logscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => activity_logScalarWhereInputObjectSchema), z.lazy(() => activity_logScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => activity_logScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => activity_logScalarWhereInputObjectSchema), z.lazy(() => activity_logScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  action_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  table_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  record_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  result: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  details: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const activity_logScalarWhereInputObjectSchema: z.ZodType<Prisma.activity_logScalarWhereInput> = activity_logscalarwhereinputSchema as unknown as z.ZodType<Prisma.activity_logScalarWhereInput>;
export const activity_logScalarWhereInputObjectZodSchema = activity_logscalarwhereinputSchema;
