import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => usersWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => usersWhereInputObjectSchema).optional().nullable()
}).strict();
export const UsersNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.UsersNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UsersNullableScalarRelationFilter>;
export const UsersNullableScalarRelationFilterObjectZodSchema = makeSchema();
