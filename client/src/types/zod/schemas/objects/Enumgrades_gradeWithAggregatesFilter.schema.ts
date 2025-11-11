import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { NestedEnumgrades_gradeWithAggregatesFilterObjectSchema as NestedEnumgrades_gradeWithAggregatesFilterObjectSchema } from './NestedEnumgrades_gradeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumgrades_gradeFilterObjectSchema as NestedEnumgrades_gradeFilterObjectSchema } from './NestedEnumgrades_gradeFilter.schema'

const makeSchema = () => z.object({
  equals: grades_gradeSchema.optional(),
  in: grades_gradeSchema.array().optional(),
  notIn: grades_gradeSchema.array().optional(),
  not: z.union([grades_gradeSchema, z.lazy(() => NestedEnumgrades_gradeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumgrades_gradeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumgrades_gradeFilterObjectSchema).optional()
}).strict();
export const Enumgrades_gradeWithAggregatesFilterObjectSchema: z.ZodType<Prisma.Enumgrades_gradeWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumgrades_gradeWithAggregatesFilter>;
export const Enumgrades_gradeWithAggregatesFilterObjectZodSchema = makeSchema();
