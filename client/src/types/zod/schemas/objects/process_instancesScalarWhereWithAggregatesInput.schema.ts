import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { Enumprocess_instances_statusWithAggregatesFilterObjectSchema as Enumprocess_instances_statusWithAggregatesFilterObjectSchema } from './Enumprocess_instances_statusWithAggregatesFilter.schema';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema';
import { Enumprocess_instances_priorityWithAggregatesFilterObjectSchema as Enumprocess_instances_priorityWithAggregatesFilterObjectSchema } from './Enumprocess_instances_priorityWithAggregatesFilter.schema';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const process_instancesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => process_instancesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => process_instancesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_instancesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_instancesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => process_instancesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  process_template_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  status: z.union([z.lazy(() => Enumprocess_instances_statusWithAggregatesFilterObjectSchema), process_instances_statusSchema]).optional(),
  priority: z.union([z.lazy(() => Enumprocess_instances_priorityWithAggregatesFilterObjectSchema), process_instances_prioritySchema]).optional(),
  assigned_user_id: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  current_step_order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  estimated_duration: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  actual_duration: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  started_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  completed_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  due_date: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  metadata: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const process_instancesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.process_instancesScalarWhereWithAggregatesInput> = process_instancesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.process_instancesScalarWhereWithAggregatesInput>;
export const process_instancesScalarWhereWithAggregatesInputObjectZodSchema = process_instancesscalarwherewithaggregatesinputSchema;
