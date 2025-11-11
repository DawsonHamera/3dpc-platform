import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { request_statusesWhereInputObjectSchema as request_statusesWhereInputObjectSchema } from './request_statusesWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => request_statusesWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => request_statusesWhereInputObjectSchema).optional().nullable()
}).strict();
export const Request_statusesNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.Request_statusesNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.Request_statusesNullableScalarRelationFilter>;
export const Request_statusesNullableScalarRelationFilterObjectZodSchema = makeSchema();
