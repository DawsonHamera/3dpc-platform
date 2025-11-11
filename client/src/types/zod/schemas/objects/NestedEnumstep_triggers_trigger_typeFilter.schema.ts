import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema'

const nestedenumstep_triggers_trigger_typefilterSchema = z.object({
  equals: step_triggers_trigger_typeSchema.optional(),
  in: step_triggers_trigger_typeSchema.array().optional(),
  notIn: step_triggers_trigger_typeSchema.array().optional(),
  not: z.union([step_triggers_trigger_typeSchema, z.lazy(() => NestedEnumstep_triggers_trigger_typeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumstep_triggers_trigger_typeFilterObjectSchema: z.ZodType<Prisma.NestedEnumstep_triggers_trigger_typeFilter> = nestedenumstep_triggers_trigger_typefilterSchema as unknown as z.ZodType<Prisma.NestedEnumstep_triggers_trigger_typeFilter>;
export const NestedEnumstep_triggers_trigger_typeFilterObjectZodSchema = nestedenumstep_triggers_trigger_typefilterSchema;
