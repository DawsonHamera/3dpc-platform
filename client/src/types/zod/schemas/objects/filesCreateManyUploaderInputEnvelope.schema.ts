import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { filesCreateManyUploaderInputObjectSchema as filesCreateManyUploaderInputObjectSchema } from './filesCreateManyUploaderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => filesCreateManyUploaderInputObjectSchema), z.lazy(() => filesCreateManyUploaderInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const filesCreateManyUploaderInputEnvelopeObjectSchema: z.ZodType<Prisma.filesCreateManyUploaderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.filesCreateManyUploaderInputEnvelope>;
export const filesCreateManyUploaderInputEnvelopeObjectZodSchema = makeSchema();
