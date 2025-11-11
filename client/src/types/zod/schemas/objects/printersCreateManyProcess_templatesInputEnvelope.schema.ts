import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateManyProcess_templatesInputObjectSchema as printersCreateManyProcess_templatesInputObjectSchema } from './printersCreateManyProcess_templatesInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => printersCreateManyProcess_templatesInputObjectSchema), z.lazy(() => printersCreateManyProcess_templatesInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const printersCreateManyProcess_templatesInputEnvelopeObjectSchema: z.ZodType<Prisma.printersCreateManyProcess_templatesInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateManyProcess_templatesInputEnvelope>;
export const printersCreateManyProcess_templatesInputEnvelopeObjectZodSchema = makeSchema();
