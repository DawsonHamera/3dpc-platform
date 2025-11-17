import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { fileCreateManyUploaderInputObjectSchema as fileCreateManyUploaderInputObjectSchema } from './fileCreateManyUploaderInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => fileCreateManyUploaderInputObjectSchema), z.lazy(() => fileCreateManyUploaderInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const fileCreateManyUploaderInputEnvelopeObjectSchema: z.ZodType<Prisma.fileCreateManyUploaderInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.fileCreateManyUploaderInputEnvelope>;
export const fileCreateManyUploaderInputEnvelopeObjectZodSchema = makeSchema();
