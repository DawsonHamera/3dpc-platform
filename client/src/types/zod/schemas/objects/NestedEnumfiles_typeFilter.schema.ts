import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { files_typeSchema } from '../enums/files_type.schema'

const nestedenumfiles_typefilterSchema = z.object({
  equals: files_typeSchema.optional(),
  in: files_typeSchema.array().optional(),
  notIn: files_typeSchema.array().optional(),
  not: z.union([files_typeSchema, z.lazy(() => NestedEnumfiles_typeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumfiles_typeFilterObjectSchema: z.ZodType<Prisma.NestedEnumfiles_typeFilter> = nestedenumfiles_typefilterSchema as unknown as z.ZodType<Prisma.NestedEnumfiles_typeFilter>;
export const NestedEnumfiles_typeFilterObjectZodSchema = nestedenumfiles_typefilterSchema;
