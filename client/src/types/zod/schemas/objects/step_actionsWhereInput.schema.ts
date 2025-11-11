import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { Enumstep_actions_button_styleNullableFilterObjectSchema as Enumstep_actions_button_styleNullableFilterObjectSchema } from './Enumstep_actions_button_styleNullableFilter.schema';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StepsScalarRelationFilterObjectSchema as StepsScalarRelationFilterObjectSchema } from './StepsScalarRelationFilter.schema';
import { stepsWhereInputObjectSchema as stepsWhereInputObjectSchema } from './stepsWhereInput.schema';
import { Step_triggersListRelationFilterObjectSchema as Step_triggersListRelationFilterObjectSchema } from './Step_triggersListRelationFilter.schema'

const step_actionswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => step_actionsWhereInputObjectSchema), z.lazy(() => step_actionsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => step_actionsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => step_actionsWhereInputObjectSchema), z.lazy(() => step_actionsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  action_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(255)]).optional(),
  action_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action_config: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  button_style: z.union([z.lazy(() => Enumstep_actions_button_styleNullableFilterObjectSchema), step_actions_button_styleSchema]).optional().nullable(),
  icon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  is_enabled: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  confirmation_message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  steps: z.union([z.lazy(() => StepsScalarRelationFilterObjectSchema), z.lazy(() => stepsWhereInputObjectSchema)]).optional(),
  step_triggers: z.lazy(() => Step_triggersListRelationFilterObjectSchema).optional()
}).strict();
export const step_actionsWhereInputObjectSchema: z.ZodType<Prisma.step_actionsWhereInput> = step_actionswhereinputSchema as unknown as z.ZodType<Prisma.step_actionsWhereInput>;
export const step_actionsWhereInputObjectZodSchema = step_actionswhereinputSchema;
