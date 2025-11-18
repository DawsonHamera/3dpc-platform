import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { eventCreateManyImage_fileInputObjectSchema as eventCreateManyImage_fileInputObjectSchema } from './eventCreateManyImage_fileInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => eventCreateManyImage_fileInputObjectSchema), z.lazy(() => eventCreateManyImage_fileInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const eventCreateManyImage_fileInputEnvelopeObjectSchema: z.ZodType<Prisma.eventCreateManyImage_fileInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.eventCreateManyImage_fileInputEnvelope>;
export const eventCreateManyImage_fileInputEnvelopeObjectZodSchema = makeSchema();
