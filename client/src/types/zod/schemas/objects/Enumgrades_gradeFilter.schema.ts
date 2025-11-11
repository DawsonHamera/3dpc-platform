import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { NestedEnumgrades_gradeFilterObjectSchema as NestedEnumgrades_gradeFilterObjectSchema } from './NestedEnumgrades_gradeFilter.schema'

const makeSchema = () => z.object({
  equals: grades_gradeSchema.optional(),
  in: grades_gradeSchema.array().optional(),
  notIn: grades_gradeSchema.array().optional(),
  not: z.union([grades_gradeSchema, z.lazy(() => NestedEnumgrades_gradeFilterObjectSchema)]).optional()
}).strict();
export const Enumgrades_gradeFilterObjectSchema: z.ZodType<Prisma.Enumgrades_gradeFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumgrades_gradeFilter>;
export const Enumgrades_gradeFilterObjectZodSchema = makeSchema();
