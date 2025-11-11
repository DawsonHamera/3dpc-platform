import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const activity_logsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => activity_logsScalarWhereInputObjectSchema), z.lazy(() => activity_logsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => activity_logsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => activity_logsScalarWhereInputObjectSchema), z.lazy(() => activity_logsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  user_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  action_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  table_name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  record_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  result: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  details: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const activity_logsScalarWhereInputObjectSchema: z.ZodType<Prisma.activity_logsScalarWhereInput> = activity_logsscalarwhereinputSchema as unknown as z.ZodType<Prisma.activity_logsScalarWhereInput>;
export const activity_logsScalarWhereInputObjectZodSchema = activity_logsscalarwhereinputSchema;
