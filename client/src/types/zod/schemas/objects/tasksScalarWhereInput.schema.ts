import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const tasksscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => tasksScalarWhereInputObjectSchema), z.lazy(() => tasksScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => tasksScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => tasksScalarWhereInputObjectSchema), z.lazy(() => tasksScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  request_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  model_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  printer_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  material_slots: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  quality: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  assigned_user_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  comments: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scheduled_start_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  scheduled_end_time: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  process_instance_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable()
}).strict();
export const tasksScalarWhereInputObjectSchema: z.ZodType<Prisma.tasksScalarWhereInput> = tasksscalarwhereinputSchema as unknown as z.ZodType<Prisma.tasksScalarWhereInput>;
export const tasksScalarWhereInputObjectZodSchema = tasksscalarwhereinputSchema;
