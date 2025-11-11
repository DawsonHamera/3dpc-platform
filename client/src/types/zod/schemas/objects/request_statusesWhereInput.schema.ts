import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { RequestsListRelationFilterObjectSchema as RequestsListRelationFilterObjectSchema } from './RequestsListRelationFilter.schema'

const request_statuseswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => request_statusesWhereInputObjectSchema), z.lazy(() => request_statusesWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => request_statusesWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => request_statusesWhereInputObjectSchema), z.lazy(() => request_statusesWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  created_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  updated_at: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  requests: z.lazy(() => RequestsListRelationFilterObjectSchema).optional()
}).strict();
export const request_statusesWhereInputObjectSchema: z.ZodType<Prisma.request_statusesWhereInput> = request_statuseswhereinputSchema as unknown as z.ZodType<Prisma.request_statusesWhereInput>;
export const request_statusesWhereInputObjectZodSchema = request_statuseswhereinputSchema;
