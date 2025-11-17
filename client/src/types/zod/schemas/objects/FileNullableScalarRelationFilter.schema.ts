import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileWhereInputObjectSchema as fileWhereInputObjectSchema } from './fileWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => fileWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => fileWhereInputObjectSchema).optional().nullable()
}).strict();
export const FileNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.FileNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FileNullableScalarRelationFilter>;
export const FileNullableScalarRelationFilterObjectZodSchema = makeSchema();
