import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateManyFilesInputObjectSchema as printersCreateManyFilesInputObjectSchema } from './printersCreateManyFilesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => printersCreateManyFilesInputObjectSchema), z.lazy(() => printersCreateManyFilesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const printersCreateManyFilesInputEnvelopeObjectSchema: z.ZodType<Prisma.printersCreateManyFilesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateManyFilesInputEnvelope>;
export const printersCreateManyFilesInputEnvelopeObjectZodSchema = makeSchema();
