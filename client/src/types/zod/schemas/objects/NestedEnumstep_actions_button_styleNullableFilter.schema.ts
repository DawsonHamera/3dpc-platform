import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema'

const nestedenumstep_actions_button_stylenullablefilterSchema = z.object({
  equals: step_actions_button_styleSchema.optional().nullable(),
  in: step_actions_button_styleSchema.array().optional().nullable(),
  notIn: step_actions_button_styleSchema.array().optional().nullable(),
  not: z.union([step_actions_button_styleSchema, z.lazy(() => NestedEnumstep_actions_button_styleNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumstep_actions_button_styleNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumstep_actions_button_styleNullableFilter> = nestedenumstep_actions_button_stylenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumstep_actions_button_styleNullableFilter>;
export const NestedEnumstep_actions_button_styleNullableFilterObjectZodSchema = nestedenumstep_actions_button_stylenullablefilterSchema;
