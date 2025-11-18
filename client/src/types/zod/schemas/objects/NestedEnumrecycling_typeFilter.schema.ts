import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema'

const nestedenumrecycling_typefilterSchema = z.object({
  equals: recycling_typeSchema.optional(),
  in: recycling_typeSchema.array().optional(),
  notIn: recycling_typeSchema.array().optional(),
  not: z.union([recycling_typeSchema, z.lazy(() => NestedEnumrecycling_typeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumrecycling_typeFilterObjectSchema: z.ZodType<Prisma.NestedEnumrecycling_typeFilter> = nestedenumrecycling_typefilterSchema as unknown as z.ZodType<Prisma.NestedEnumrecycling_typeFilter>;
export const NestedEnumrecycling_typeFilterObjectZodSchema = nestedenumrecycling_typefilterSchema;
