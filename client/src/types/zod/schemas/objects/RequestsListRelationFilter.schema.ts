import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsWhereInputObjectSchema as requestsWhereInputObjectSchema } from './requestsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => requestsWhereInputObjectSchema).optional(),
  some: z.lazy(() => requestsWhereInputObjectSchema).optional(),
  none: z.lazy(() => requestsWhereInputObjectSchema).optional()
}).strict();
export const RequestsListRelationFilterObjectSchema: z.ZodType<Prisma.RequestsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.RequestsListRelationFilter>;
export const RequestsListRelationFilterObjectZodSchema = makeSchema();
