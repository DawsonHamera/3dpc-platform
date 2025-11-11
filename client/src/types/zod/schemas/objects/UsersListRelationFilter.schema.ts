import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersWhereInputObjectSchema as usersWhereInputObjectSchema } from './usersWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => usersWhereInputObjectSchema).optional(),
  some: z.lazy(() => usersWhereInputObjectSchema).optional(),
  none: z.lazy(() => usersWhereInputObjectSchema).optional()
}).strict();
export const UsersListRelationFilterObjectSchema: z.ZodType<Prisma.UsersListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UsersListRelationFilter>;
export const UsersListRelationFilterObjectZodSchema = makeSchema();
