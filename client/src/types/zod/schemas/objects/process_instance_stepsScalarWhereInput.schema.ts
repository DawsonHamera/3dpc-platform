import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { Enumprocess_instance_steps_statusFilterObjectSchema as Enumprocess_instance_steps_statusFilterObjectSchema } from './Enumprocess_instance_steps_statusFilter.schema';
import { process_instance_steps_statusSchema } from '../enums/process_instance_steps_status.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const process_instance_stepsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema), z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema), z.lazy(() => process_instance_stepsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  process_instance_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => Enumprocess_instance_steps_statusFilterObjectSchema), process_instance_steps_statusSchema]).optional(),
  started_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  completed_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  assigned_user_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  is_required: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  input_data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  output_data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  metadata: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  due_date: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const process_instance_stepsScalarWhereInputObjectSchema: z.ZodType<Prisma.process_instance_stepsScalarWhereInput> = process_instance_stepsscalarwhereinputSchema as unknown as z.ZodType<Prisma.process_instance_stepsScalarWhereInput>;
export const process_instance_stepsScalarWhereInputObjectZodSchema = process_instance_stepsscalarwhereinputSchema;
