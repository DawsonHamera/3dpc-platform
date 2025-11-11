import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema';
import { NestedEnumstep_actions_button_styleNullableFilterObjectSchema as NestedEnumstep_actions_button_styleNullableFilterObjectSchema } from './NestedEnumstep_actions_button_styleNullableFilter.schema'

const makeSchema = () => z.object({
  equals: step_actions_button_styleSchema.optional().nullable(),
  in: step_actions_button_styleSchema.array().optional().nullable(),
  notIn: step_actions_button_styleSchema.array().optional().nullable(),
  not: z.union([step_actions_button_styleSchema, z.lazy(() => NestedEnumstep_actions_button_styleNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const Enumstep_actions_button_styleNullableFilterObjectSchema: z.ZodType<Prisma.Enumstep_actions_button_styleNullableFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumstep_actions_button_styleNullableFilter>;
export const Enumstep_actions_button_styleNullableFilterObjectZodSchema = makeSchema();
