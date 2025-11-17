import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { file_typeSchema } from '../enums/file_type.schema'

const nestedenumfile_typefilterSchema = z.object({
  equals: file_typeSchema.optional(),
  in: file_typeSchema.array().optional(),
  notIn: file_typeSchema.array().optional(),
  not: z.union([file_typeSchema, z.lazy(() => NestedEnumfile_typeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumfile_typeFilterObjectSchema: z.ZodType<Prisma.NestedEnumfile_typeFilter> = nestedenumfile_typefilterSchema as unknown as z.ZodType<Prisma.NestedEnumfile_typeFilter>;
export const NestedEnumfile_typeFilterObjectZodSchema = nestedenumfile_typefilterSchema;
