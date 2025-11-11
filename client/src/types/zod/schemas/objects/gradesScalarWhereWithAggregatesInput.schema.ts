import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { Enumgrades_gradeWithAggregatesFilterObjectSchema as Enumgrades_gradeWithAggregatesFilterObjectSchema } from './Enumgrades_gradeWithAggregatesFilter.schema';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema as DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema'

const gradesscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => gradesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => gradesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => gradesScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => gradesScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => gradesScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  grade: z.union([z.lazy(() => Enumgrades_gradeWithAggregatesFilterObjectSchema), grades_gradeSchema]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()]).optional().nullable()
}).strict();
export const gradesScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.gradesScalarWhereWithAggregatesInput> = gradesscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.gradesScalarWhereWithAggregatesInput>;
export const gradesScalarWhereWithAggregatesInputObjectZodSchema = gradesscalarwherewithaggregatesinputSchema;
