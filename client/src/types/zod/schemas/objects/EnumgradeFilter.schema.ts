import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema';
import { NestedEnumgradeFilterObjectSchema as NestedEnumgradeFilterObjectSchema } from './NestedEnumgradeFilter.schema'

const makeSchema = () => z.object({
  equals: gradeSchema.optional(),
  in: gradeSchema.array().optional(),
  notIn: gradeSchema.array().optional(),
  not: z.union([gradeSchema, z.lazy(() => NestedEnumgradeFilterObjectSchema)]).optional()
}).strict();
export const EnumgradeFilterObjectSchema: z.ZodType<Prisma.EnumgradeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumgradeFilter>;
export const EnumgradeFilterObjectZodSchema = makeSchema();
