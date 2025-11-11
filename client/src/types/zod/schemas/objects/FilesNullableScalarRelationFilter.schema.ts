import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesWhereInputObjectSchema as filesWhereInputObjectSchema } from './filesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => filesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => filesWhereInputObjectSchema).optional().nullable()
}).strict();
export const FilesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.FilesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FilesNullableScalarRelationFilter>;
export const FilesNullableScalarRelationFilterObjectZodSchema = makeSchema();
