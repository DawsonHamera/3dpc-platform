import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const error_reportsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => error_reportsScalarWhereInputObjectSchema), z.lazy(() => error_reportsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => error_reportsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => error_reportsScalarWhereInputObjectSchema), z.lazy(() => error_reportsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  task_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  submitted_by: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  image_url: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const error_reportsScalarWhereInputObjectSchema: z.ZodType<Prisma.error_reportsScalarWhereInput> = error_reportsscalarwhereinputSchema as unknown as z.ZodType<Prisma.error_reportsScalarWhereInput>;
export const error_reportsScalarWhereInputObjectZodSchema = error_reportsscalarwhereinputSchema;
