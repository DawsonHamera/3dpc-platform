import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { Enumstep_actions_button_styleNullableWithAggregatesFilterObjectSchema as Enumstep_actions_button_styleNullableWithAggregatesFilterObjectSchema } from './Enumstep_actions_button_styleNullableWithAggregatesFilter.schema';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema';
import { BoolNullableWithAggregatesFilterObjectSchema as BoolNullableWithAggregatesFilterObjectSchema } from './BoolNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const step_actionsscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => step_actionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => step_actionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => step_actionsScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => step_actionsScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => step_actionsScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  action_order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  label: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(255)]).optional(),
  action_type: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  action_config: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  button_style: z.union([z.lazy(() => Enumstep_actions_button_styleNullableWithAggregatesFilterObjectSchema), step_actions_button_styleSchema]).optional().nullable(),
  icon: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  is_enabled: z.union([z.lazy(() => BoolNullableWithAggregatesFilterObjectSchema), z.boolean()]).optional().nullable(),
  confirmation_message: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const step_actionsScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.step_actionsScalarWhereWithAggregatesInput> = step_actionsscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.step_actionsScalarWhereWithAggregatesInput>;
export const step_actionsScalarWhereWithAggregatesInputObjectZodSchema = step_actionsscalarwherewithaggregatesinputSchema;
