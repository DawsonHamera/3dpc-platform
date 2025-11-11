import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateManyModelsInputObjectSchema as productsCreateManyModelsInputObjectSchema } from './productsCreateManyModelsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => productsCreateManyModelsInputObjectSchema), z.lazy(() => productsCreateManyModelsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const productsCreateManyModelsInputEnvelopeObjectSchema: z.ZodType<Prisma.productsCreateManyModelsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateManyModelsInputEnvelope>;
export const productsCreateManyModelsInputEnvelopeObjectZodSchema = makeSchema();
