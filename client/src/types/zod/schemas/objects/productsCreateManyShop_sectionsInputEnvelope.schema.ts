import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { productsCreateManyShop_sectionsInputObjectSchema as productsCreateManyShop_sectionsInputObjectSchema } from './productsCreateManyShop_sectionsInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => productsCreateManyShop_sectionsInputObjectSchema), z.lazy(() => productsCreateManyShop_sectionsInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const productsCreateManyShop_sectionsInputEnvelopeObjectSchema: z.ZodType<Prisma.productsCreateManyShop_sectionsInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateManyShop_sectionsInputEnvelope>;
export const productsCreateManyShop_sectionsInputEnvelopeObjectZodSchema = makeSchema();
