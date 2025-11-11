import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { Enumstep_actions_button_styleNullableFilterObjectSchema as Enumstep_actions_button_styleNullableFilterObjectSchema } from './Enumstep_actions_button_styleNullableFilter.schema';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema';
import { BoolNullableFilterObjectSchema as BoolNullableFilterObjectSchema } from './BoolNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const step_actionsscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => step_actionsScalarWhereInputObjectSchema), z.lazy(() => step_actionsScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => step_actionsScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => step_actionsScalarWhereInputObjectSchema), z.lazy(() => step_actionsScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  step_id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  action_order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  label: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action_type: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  action_config: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  button_style: z.union([z.lazy(() => Enumstep_actions_button_styleNullableFilterObjectSchema), step_actions_button_styleSchema]).optional().nullable(),
  icon: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  is_enabled: z.union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()]).optional().nullable(),
  confirmation_message: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updated_at: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const step_actionsScalarWhereInputObjectSchema: z.ZodType<Prisma.step_actionsScalarWhereInput> = step_actionsscalarwhereinputSchema as unknown as z.ZodType<Prisma.step_actionsScalarWhereInput>;
export const step_actionsScalarWhereInputObjectZodSchema = step_actionsscalarwhereinputSchema;
