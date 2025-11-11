import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema'

const nestedenumgrades_gradefilterSchema = z.object({
  equals: grades_gradeSchema.optional(),
  in: grades_gradeSchema.array().optional(),
  notIn: grades_gradeSchema.array().optional(),
  not: z.union([grades_gradeSchema, z.lazy(() => NestedEnumgrades_gradeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumgrades_gradeFilterObjectSchema: z.ZodType<Prisma.NestedEnumgrades_gradeFilter> = nestedenumgrades_gradefilterSchema as unknown as z.ZodType<Prisma.NestedEnumgrades_gradeFilter>;
export const NestedEnumgrades_gradeFilterObjectZodSchema = nestedenumgrades_gradefilterSchema;
