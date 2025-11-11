import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradesWhereInputObjectSchema as gradesWhereInputObjectSchema } from './gradesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => gradesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => gradesWhereInputObjectSchema).optional().nullable()
}).strict();
export const GradesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.GradesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GradesNullableScalarRelationFilter>;
export const GradesNullableScalarRelationFilterObjectZodSchema = makeSchema();
