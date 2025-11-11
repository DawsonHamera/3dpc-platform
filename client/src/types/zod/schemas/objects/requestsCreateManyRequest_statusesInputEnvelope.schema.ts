import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { requestsCreateManyRequest_statusesInputObjectSchema as requestsCreateManyRequest_statusesInputObjectSchema } from './requestsCreateManyRequest_statusesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => requestsCreateManyRequest_statusesInputObjectSchema), z.lazy(() => requestsCreateManyRequest_statusesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const requestsCreateManyRequest_statusesInputEnvelopeObjectSchema: z.ZodType<Prisma.requestsCreateManyRequest_statusesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.requestsCreateManyRequest_statusesInputEnvelope>;
export const requestsCreateManyRequest_statusesInputEnvelopeObjectZodSchema = makeSchema();
