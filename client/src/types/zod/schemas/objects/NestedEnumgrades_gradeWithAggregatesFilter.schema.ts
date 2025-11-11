import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumgrades_gradeFilterObjectSchema as NestedEnumgrades_gradeFilterObjectSchema } from './NestedEnumgrades_gradeFilter.schema'

const nestedenumgrades_gradewithaggregatesfilterSchema = z.object({
  equals: grades_gradeSchema.optional(),
  in: grades_gradeSchema.array().optional(),
  notIn: grades_gradeSchema.array().optional(),
  not: z.union([grades_gradeSchema, z.lazy(() => NestedEnumgrades_gradeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumgrades_gradeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumgrades_gradeFilterObjectSchema).optional()
}).strict();
export const NestedEnumgrades_gradeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumgrades_gradeWithAggregatesFilter> = nestedenumgrades_gradewithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumgrades_gradeWithAggregatesFilter>;
export const NestedEnumgrades_gradeWithAggregatesFilterObjectZodSchema = nestedenumgrades_gradewithaggregatesfilterSchema;
