import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { Enumstep_triggers_trigger_typeFilterObjectSchema as Enumstep_triggers_trigger_typeFilterObjectSchema } from './Enumstep_triggers_trigger_typeFilter.schema';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { Step_actionsScalarRelationFilterObjectSchema as Step_actionsScalarRelationFilterObjectSchema } from './Step_actionsScalarRelationFilter.schema';
import { step_actionsWhereInputObjectSchema as step_actionsWhereInputObjectSchema } from './step_actionsWhereInput.schema'

const step_triggerswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => step_triggersWhereInputObjectSchema), z.lazy(() => step_triggersWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => step_triggersWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => step_triggersWhereInputObjectSchema), z.lazy(() => step_triggersWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_action_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  trigger_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  trigger_type: z.union([z.lazy(() => Enumstep_triggers_trigger_typeFilterObjectSchema), step_triggers_trigger_typeSchema]).optional(),
  trigger_config: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  condition_rules: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  is_enabled: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  step_actions: z.union([z.lazy(() => Step_actionsScalarRelationFilterObjectSchema), z.lazy(() => step_actionsWhereInputObjectSchema)]).optional()
}).strict();
export const step_triggersWhereInputObjectSchema: z.ZodType<Prisma.step_triggersWhereInput> = step_triggerswhereinputSchema as unknown as z.ZodType<Prisma.step_triggersWhereInput>;
export const step_triggersWhereInputObjectZodSchema = step_triggerswhereinputSchema;
