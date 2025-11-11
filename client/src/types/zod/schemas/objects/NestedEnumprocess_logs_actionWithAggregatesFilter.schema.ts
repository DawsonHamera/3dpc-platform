import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumprocess_logs_actionFilterObjectSchema as NestedEnumprocess_logs_actionFilterObjectSchema } from './NestedEnumprocess_logs_actionFilter.schema'

const nestedenumprocess_logs_actionwithaggregatesfilterSchema = z.object({
  equals: process_logs_actionSchema.optional(),
  in: process_logs_actionSchema.array().optional(),
  notIn: process_logs_actionSchema.array().optional(),
  not: z.union([process_logs_actionSchema, z.lazy(() => NestedEnumprocess_logs_actionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumprocess_logs_actionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumprocess_logs_actionFilterObjectSchema).optional()
}).strict();
export const NestedEnumprocess_logs_actionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_logs_actionWithAggregatesFilter> = nestedenumprocess_logs_actionwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_logs_actionWithAggregatesFilter>;
export const NestedEnumprocess_logs_actionWithAggregatesFilterObjectZodSchema = nestedenumprocess_logs_actionwithaggregatesfilterSchema;
