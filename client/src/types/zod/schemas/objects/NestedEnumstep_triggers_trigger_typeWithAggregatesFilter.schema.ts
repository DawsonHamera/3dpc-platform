import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumstep_triggers_trigger_typeFilterObjectSchema as NestedEnumstep_triggers_trigger_typeFilterObjectSchema } from './NestedEnumstep_triggers_trigger_typeFilter.schema'

const nestedenumstep_triggers_trigger_typewithaggregatesfilterSchema = z.object({
  equals: step_triggers_trigger_typeSchema.optional(),
  in: step_triggers_trigger_typeSchema.array().optional(),
  notIn: step_triggers_trigger_typeSchema.array().optional(),
  not: z.union([step_triggers_trigger_typeSchema, z.lazy(() => NestedEnumstep_triggers_trigger_typeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumstep_triggers_trigger_typeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumstep_triggers_trigger_typeFilterObjectSchema).optional()
}).strict();
export const NestedEnumstep_triggers_trigger_typeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumstep_triggers_trigger_typeWithAggregatesFilter> = nestedenumstep_triggers_trigger_typewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumstep_triggers_trigger_typeWithAggregatesFilter>;
export const NestedEnumstep_triggers_trigger_typeWithAggregatesFilterObjectZodSchema = nestedenumstep_triggers_trigger_typewithaggregatesfilterSchema;
