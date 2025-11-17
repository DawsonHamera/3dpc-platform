import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumgradeFilterObjectSchema as NestedEnumgradeFilterObjectSchema } from './NestedEnumgradeFilter.schema'

const nestedenumgradewithaggregatesfilterSchema = z.object({
  equals: gradeSchema.optional(),
  in: gradeSchema.array().optional(),
  notIn: gradeSchema.array().optional(),
  not: z.union([gradeSchema, z.lazy(() => NestedEnumgradeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumgradeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumgradeFilterObjectSchema).optional()
}).strict();
export const NestedEnumgradeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumgradeWithAggregatesFilter> = nestedenumgradewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumgradeWithAggregatesFilter>;
export const NestedEnumgradeWithAggregatesFilterObjectZodSchema = nestedenumgradewithaggregatesfilterSchema;
