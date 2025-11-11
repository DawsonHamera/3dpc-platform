import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => usersWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const UsersScalarRelationFilterObjectSchema: z.ZodType<Prisma.UsersScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UsersScalarRelationFilter>;
export const UsersScalarRelationFilterObjectZodSchema = makeSchema();
