import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { userWhereInputObjectSchema as userWhereInputObjectSchema } from './userWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => userWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => userWhereInputObjectSchema).optional().nullable()
}).strict();
export const UserNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UserNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UserNullableScalarRelationFilter>;
export const UserNullableScalarRelationFilterObjectZodSchema = makeSchema();
