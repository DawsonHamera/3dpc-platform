import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { NestedEnumrecycling_typeFilterObjectSchema as NestedEnumrecycling_typeFilterObjectSchema } from './NestedEnumrecycling_typeFilter.schema'

const makeSchema = () => z.object({
  equals: recycling_typeSchema.optional(),
  in: recycling_typeSchema.array().optional(),
  notIn: recycling_typeSchema.array().optional(),
  not: z.union([recycling_typeSchema, z.lazy(() => NestedEnumrecycling_typeFilterObjectSchema)]).optional()
}).strict();
export const Enumrecycling_typeFilterObjectSchema: z.ZodType<Prisma.Enumrecycling_typeFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumrecycling_typeFilter>;
export const Enumrecycling_typeFilterObjectZodSchema = makeSchema();
