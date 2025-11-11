import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateManyPrinter_statusesInputObjectSchema as printersCreateManyPrinter_statusesInputObjectSchema } from './printersCreateManyPrinter_statusesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => printersCreateManyPrinter_statusesInputObjectSchema), z.lazy(() => printersCreateManyPrinter_statusesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const printersCreateManyPrinter_statusesInputEnvelopeObjectSchema: z.ZodType<Prisma.printersCreateManyPrinter_statusesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateManyPrinter_statusesInputEnvelope>;
export const printersCreateManyPrinter_statusesInputEnvelopeObjectZodSchema = makeSchema();
