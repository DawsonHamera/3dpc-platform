import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereInputObjectSchema as printersWhereInputObjectSchema } from './printersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => printersWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => printersWhereInputObjectSchema).optional().nullable()
}).strict();
export const PrintersNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.PrintersNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.PrintersNullableScalarRelationFilter>;
export const PrintersNullableScalarRelationFilterObjectZodSchema = makeSchema();
