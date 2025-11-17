import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateManyFilesInputObjectSchema as eventCreateManyFilesInputObjectSchema } from './eventCreateManyFilesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => eventCreateManyFilesInputObjectSchema), z.lazy(() => eventCreateManyFilesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const eventCreateManyFilesInputEnvelopeObjectSchema: z.ZodType<Prisma.eventCreateManyFilesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateManyFilesInputEnvelope>;
export const eventCreateManyFilesInputEnvelopeObjectZodSchema = makeSchema();
