import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumprocess_logs_levelFilterObjectSchema as NestedEnumprocess_logs_levelFilterObjectSchema } from './NestedEnumprocess_logs_levelFilter.schema'

const nestedenumprocess_logs_levelwithaggregatesfilterSchema = z.object({
  equals: process_logs_levelSchema.optional(),
  in: process_logs_levelSchema.array().optional(),
  notIn: process_logs_levelSchema.array().optional(),
  not: z.union([process_logs_levelSchema, z.lazy(() => NestedEnumprocess_logs_levelWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumprocess_logs_levelFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumprocess_logs_levelFilterObjectSchema).optional()
}).strict();
export const NestedEnumprocess_logs_levelWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_logs_levelWithAggregatesFilter> = nestedenumprocess_logs_levelwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_logs_levelWithAggregatesFilter>;
export const NestedEnumprocess_logs_levelWithAggregatesFilterObjectZodSchema = nestedenumprocess_logs_levelwithaggregatesfilterSchema;
