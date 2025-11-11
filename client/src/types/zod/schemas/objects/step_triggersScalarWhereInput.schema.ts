import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { Enumstep_triggers_trigger_typeFilterObjectSchema as Enumstep_triggers_trigger_typeFilterObjectSchema } from './Enumstep_triggers_trigger_typeFilter.schema';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const step_triggersscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => step_triggersScalarWhereInputObjectSchema), z.lazy(() => step_triggersScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => step_triggersScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => step_triggersScalarWhereInputObjectSchema), z.lazy(() => step_triggersScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_action_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  trigger_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  trigger_type: z.union([z.lazy(() => Enumstep_triggers_trigger_typeFilterObjectSchema), step_triggers_trigger_typeSchema]).optional(),
  trigger_config: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  condition_rules: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  is_enabled: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const step_triggersScalarWhereInputObjectSchema: z.ZodType<Prisma.step_triggersScalarWhereInput> = step_triggersscalarwhereinputSchema as unknown as z.ZodType<Prisma.step_triggersScalarWhereInput>;
export const step_triggersScalarWhereInputObjectZodSchema = step_triggersscalarwhereinputSchema;
