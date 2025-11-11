import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema';
import { NestedEnumprocess_logs_levelWithAggregatesFilterObjectSchema as NestedEnumprocess_logs_levelWithAggregatesFilterObjectSchema } from './NestedEnumprocess_logs_levelWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumprocess_logs_levelFilterObjectSchema as NestedEnumprocess_logs_levelFilterObjectSchema } from './NestedEnumprocess_logs_levelFilter.schema'

const makeSchema = () => z.object({
  equals: process_logs_levelSchema.optional(),
  in: process_logs_levelSchema.array().optional(),
  notIn: process_logs_levelSchema.array().optional(),
  not: z.union([process_logs_levelSchema, z.lazy(() => NestedEnumprocess_logs_levelWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumprocess_logs_levelFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumprocess_logs_levelFilterObjectSchema).optional()
}).strict();
export const Enumprocess_logs_levelWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumprocess_logs_levelWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_logs_levelWithAggregatesFilter>;
export const Enumprocess_logs_levelWithAggregatesFilterObjectZodSchema = makeSchema();
