import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { file_typeSchema } from '../enums/file_type.schema';
import { NestedEnumfile_typeFilterObjectSchema as NestedEnumfile_typeFilterObjectSchema } from './NestedEnumfile_typeFilter.schema'

const makeSchema = () => z.object({
  equals: file_typeSchema.optional(),
  in: file_typeSchema.array().optional(),
  notIn: file_typeSchema.array().optional(),
  not: z.union([file_typeSchema, z.lazy(() => NestedEnumfile_typeFilterObjectSchema)]).optional()
}).strict();
export const Enumfile_typeFilterObjectSchema: z.ZodType<Prisma.Enumfile_typeFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumfile_typeFilter>;
export const Enumfile_typeFilterObjectZodSchema = makeSchema();
