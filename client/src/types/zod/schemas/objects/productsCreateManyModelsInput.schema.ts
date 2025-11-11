import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string().max(100),
  description: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  default_variant_id: z.number().int().optional().nullable(),
  custom_options: z.string().optional().nullable(),
  tags: z.string().optional().nullable(),
  section_id: z.number().int().optional().nullable()
}).strict();
export const productsCreateManyModelsInputObjectSchema: z.ZodType<Prisma.productsCreateManyModelsInput> = makeSchema() as unknown as z.ZodType<Prisma.productsCreateManyModelsInput>;
export const productsCreateManyModelsInputObjectZodSchema = makeSchema();
