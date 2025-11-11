import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { product_variantsCreateManyInputObjectSchema as product_variantsCreateManyInputObjectSchema } from './objects/product_variantsCreateManyInput.schema';

export const product_variantsCreateManySchema: z.ZodType<Prisma.product_variantsCreateManyArgs> = z.object({ data: z.union([ product_variantsCreateManyInputObjectSchema, z.array(product_variantsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.product_variantsCreateManyArgs>;

export const product_variantsCreateManyZodSchema = z.object({ data: z.union([ product_variantsCreateManyInputObjectSchema, z.array(product_variantsCreateManyInputObjectSchema) ]),  }).strict();