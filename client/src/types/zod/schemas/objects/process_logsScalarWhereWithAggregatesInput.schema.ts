import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { IntNullableWithAggregatesFilterObjectSchema as IntNullableWithAggregatesFilterObjectSchema } from './IntNullableWithAggregatesFilter.schema';
import { Enumprocess_logs_levelWithAggregatesFilterObjectSchema as Enumprocess_logs_levelWithAggregatesFilterObjectSchema } from './Enumprocess_logs_levelWithAggregatesFilter.schema';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema';
import { Enumprocess_logs_actionWithAggregatesFilterObjectSchema as Enumprocess_logs_actionWithAggregatesFilterObjectSchema } from './Enumprocess_logs_actionWithAggregatesFilter.schema';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const process_logsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => process_logsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => process_logsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => process_logsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => process_logsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => process_logsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  process_instance_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  step_order: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  level: z.union([z.lazy(() => Enumprocess_logs_levelWithAggregatesFilterObjectSchema), process_logs_levelSchema]).optional(),
  action: z.union([z.lazy(() => Enumprocess_logs_actionWithAggregatesFilterObjectSchema), process_logs_actionSchema]).optional(),
  message: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  data: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  user_id: z.union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number().int()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  deleted_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const process_logsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.process_logsScalarWhereWithAggregatesInput> = process_logsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.process_logsScalarWhereWithAggregatesInput>;
export const process_logsScalarWhereWithAggregatesInputObjectZodSchema = process_logsscalarwherewithaggregatesinputSchema;
