import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema';
import { NestedEnumstep_triggers_trigger_typeFilterObjectSchema as NestedEnumstep_triggers_trigger_typeFilterObjectSchema } from './NestedEnumstep_triggers_trigger_typeFilter.schema'

const makeSchema = () => z.object({
  equals: step_triggers_trigger_typeSchema.optional(),
  in: step_triggers_trigger_typeSchema.array().optional(),
  notIn: step_triggers_trigger_typeSchema.array().optional(),
  not: z.union([step_triggers_trigger_typeSchema, z.lazy(() => NestedEnumstep_triggers_trigger_typeFilterObjectSchema)]).optional()
}).strict();
export const Enumstep_triggers_trigger_typeFilterObjectSchema: z.ZodType<Prisma.Enumstep_triggers_trigger_typeFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumstep_triggers_trigger_typeFilter>;
export const Enumstep_triggers_trigger_typeFilterObjectZodSchema = makeSchema();
