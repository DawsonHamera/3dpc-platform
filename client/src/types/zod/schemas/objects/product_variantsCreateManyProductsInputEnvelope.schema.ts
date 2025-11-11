import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { product_variantsCreateManyProductsInputObjectSchema as product_variantsCreateManyProductsInputObjectSchema } from './product_variantsCreateManyProductsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => product_variantsCreateManyProductsInputObjectSchema), z.lazy(() => product_variantsCreateManyProductsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const product_variantsCreateManyProductsInputEnvelopeObjectSchema: z.ZodType<Prisma.product_variantsCreateManyProductsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.product_variantsCreateManyProductsInputEnvelope>;
export const product_variantsCreateManyProductsInputEnvelopeObjectZodSchema = makeSchema();
