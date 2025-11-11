import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { Enumstep_triggers_trigger_typeWithAggregatesFilterObjectSchema as Enumstep_triggers_trigger_typeWithAggregatesFilterObjectSchema } from './Enumstep_triggers_trigger_typeWithAggregatesFilter.schema';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const step_triggersscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => step_triggersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => step_triggersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => step_triggersScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => step_triggersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => step_triggersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  step_action_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  trigger_order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  trigger_type: z.union([z.lazy(() => Enumstep_triggers_trigger_typeWithAggregatesFilterObjectSchema), step_triggers_trigger_typeSchema]).optional(),
  trigger_config: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  condition_rules: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  is_enabled: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const step_triggersScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.step_triggersScalarWhereWithAggregatesInput> = step_triggersscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.step_triggersScalarWhereWithAggregatesInput>;
export const step_triggersScalarWhereWithAggregatesInputObjectZodSchema = step_triggersscalarwherewithaggregatesinputSchema;
