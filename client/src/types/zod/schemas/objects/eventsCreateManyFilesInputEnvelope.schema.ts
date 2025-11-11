import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventsCreateManyFilesInputObjectSchema as eventsCreateManyFilesInputObjectSchema } from './eventsCreateManyFilesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => eventsCreateManyFilesInputObjectSchema), z.lazy(() => eventsCreateManyFilesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const eventsCreateManyFilesInputEnvelopeObjectSchema: z.ZodType<Prisma.eventsCreateManyFilesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.eventsCreateManyFilesInputEnvelope>;
export const eventsCreateManyFilesInputEnvelopeObjectZodSchema = makeSchema();
