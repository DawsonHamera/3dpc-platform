import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateManyMaterialsInputObjectSchema as printersCreateManyMaterialsInputObjectSchema } from './printersCreateManyMaterialsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => printersCreateManyMaterialsInputObjectSchema), z.lazy(() => printersCreateManyMaterialsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const printersCreateManyMaterialsInputEnvelopeObjectSchema: z.ZodType<Prisma.printersCreateManyMaterialsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateManyMaterialsInputEnvelope>;
export const printersCreateManyMaterialsInputEnvelopeObjectZodSchema = makeSchema();
