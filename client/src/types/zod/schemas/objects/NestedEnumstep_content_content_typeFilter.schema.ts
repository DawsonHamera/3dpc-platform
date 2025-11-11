import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_content_content_typeSchema } from '../enums/step_content_content_type.schema'

const nestedenumstep_content_content_typefilterSchema = z.object({
  equals: step_content_content_typeSchema.optional(),
  in: step_content_content_typeSchema.array().optional(),
  notIn: step_content_content_typeSchema.array().optional(),
  not: z.union([step_content_content_typeSchema, z.lazy(() => NestedEnumstep_content_content_typeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumstep_content_content_typeFilterObjectSchema: z.ZodType<Prisma.NestedEnumstep_content_content_typeFilter> = nestedenumstep_content_content_typefilterSchema as unknown as z.ZodType<Prisma.NestedEnumstep_content_content_typeFilter>;
export const NestedEnumstep_content_content_typeFilterObjectZodSchema = nestedenumstep_content_content_typefilterSchema;
