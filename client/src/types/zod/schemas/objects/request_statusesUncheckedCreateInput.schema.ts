import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsUncheckedCreateNestedManyWithoutRequest_statusesInputObjectSchema as requestsUncheckedCreateNestedManyWithoutRequest_statusesInputObjectSchema } from './requestsUncheckedCreateNestedManyWithoutRequest_statusesInput.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  created_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional().nullable(),
  requests: z.lazy(() => requestsUncheckedCreateNestedManyWithoutRequest_statusesInputObjectSchema)
}).strict();
export const request_statusesUncheckedCreateInputObjectSchema: z.ZodType<Prisma.request_statusesUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.request_statusesUncheckedCreateInput>;
export const request_statusesUncheckedCreateInputObjectZodSchema = makeSchema();
