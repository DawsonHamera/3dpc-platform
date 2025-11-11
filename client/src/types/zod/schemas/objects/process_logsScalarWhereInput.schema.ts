import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema as IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { Enumprocess_logs_levelFilterObjectSchema as Enumprocess_logs_levelFilterObjectSchema } from './Enumprocess_logs_levelFilter.schema';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema';
import { Enumprocess_logs_actionFilterObjectSchema as Enumprocess_logs_actionFilterObjectSchema } from './Enumprocess_logs_actionFilter.schema';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema'

const process_logsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => process_logsScalarWhereInputObjectSchema), z.lazy(() => process_logsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_logsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_logsScalarWhereInputObjectSchema), z.lazy(() => process_logsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  process_instance_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_order: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  level: z.union([z.lazy(() => Enumprocess_logs_levelFilterObjectSchema), process_logs_levelSchema]).optional(),
  action: z.union([z.lazy(() => Enumprocess_logs_actionFilterObjectSchema), process_logs_actionSchema]).optional(),
  message: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  user_id: z.union([z.lazy(() => IntNullableFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const process_logsScalarWhereInputObjectSchema: z.ZodType<Prisma.process_logsScalarWhereInput> = process_logsscalarwhereinputSchema as unknown as z.ZodType<Prisma.process_logsScalarWhereInput>;
export const process_logsScalarWhereInputObjectZodSchema = process_logsscalarwhereinputSchema;
