import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { roleWhereInputObjectSchema as roleWhereInputObjectSchema } from './roleWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => roleWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => roleWhereInputObjectSchema).optional()
}).strict();
export const RoleScalarRelationFilterObjectSchema: z.ZodType<Prisma.RoleScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RoleScalarRelationFilter>;
export const RoleScalarRelationFilterObjectZodSchema = makeSchema();
