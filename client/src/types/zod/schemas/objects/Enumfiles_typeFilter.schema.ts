import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { files_typeSchema } from '../enums/files_type.schema';
import { NestedEnumfiles_typeFilterObjectSchema as NestedEnumfiles_typeFilterObjectSchema } from './NestedEnumfiles_typeFilter.schema'

const makeSchema = () => z.object({
  equals: files_typeSchema.optional(),
  in: files_typeSchema.array().optional(),
  notIn: files_typeSchema.array().optional(),
  not: z.union([files_typeSchema, z.lazy(() => NestedEnumfiles_typeFilterObjectSchema)]).optional()
}).strict();
export const Enumfiles_typeFilterObjectSchema: z.ZodType<Prisma.Enumfiles_typeFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumfiles_typeFilter>;
export const Enumfiles_typeFilterObjectZodSchema = makeSchema();
