import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesWhereInputObjectSchema as rolesWhereInputObjectSchema } from './rolesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => rolesWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => rolesWhereInputObjectSchema).optional()
}).strict();
export const RolesScalarRelationFilterObjectSchema: z.ZodType<Prisma.RolesScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RolesScalarRelationFilter>;
export const RolesScalarRelationFilterObjectZodSchema = makeSchema();
