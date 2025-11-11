import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './requestsWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => requestsWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => requestsWhereInputObjectSchema).optional()
}).strict();
export const RequestsScalarRelationFilterObjectSchema: z.ZodType<Prisma.RequestsScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RequestsScalarRelationFilter>;
export const RequestsScalarRelationFilterObjectZodSchema = makeSchema();
