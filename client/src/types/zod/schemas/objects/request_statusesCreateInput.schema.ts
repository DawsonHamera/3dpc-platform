import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsCreateNestedManyWithoutRequest_statusesInputObjectSchema as requestsCreateNestedManyWithoutRequest_statusesInputObjectSchema } from './requestsCreateNestedManyWithoutRequest_statusesInput.schema'

const makeSchema = () => z.object({
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  requests: z.lazy(() => requestsCreateNestedManyWithoutRequest_statusesInputObjectSchema)
}).strict();
export const request_statusesCreateInputObjectSchema: z.ZodType<Prisma.request_statusesCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesCreateInput>;
export const request_statusesCreateInputObjectZodSchema = makeSchema();
