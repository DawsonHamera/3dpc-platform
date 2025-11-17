import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema'

const nestedenumgradefilterSchema = z.object({
  equals: gradeSchema.optional(),
  in: gradeSchema.array().optional(),
  notIn: gradeSchema.array().optional(),
  not: z.union([gradeSchema, z.lazy(() => NestedEnumgradeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumgradeFilterObjectSchema: z.ZodType<Prisma.NestedEnumgradeFilter> = nestedenumgradefilterSchema as unknown as z.ZodType<Prisma.NestedEnumgradeFilter>;
export const NestedEnumgradeFilterObjectZodSchema = nestedenumgradefilterSchema;
