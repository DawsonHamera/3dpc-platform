import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { productsCreateManyInputObjectSchema as productsCreateManyInputObjectSchema } from './objects/productsCreateManyInput.schema';

export const productsCreateManySchema: z.ZodType<Prisma.productsCreateManyArgs> = z.object({ data: z.union([ productsCreateManyInputObjectSchema, z.array(productsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.productsCreateManyArgs>;

export const productsCreateManyZodSchema = z.object({ data: z.union([ productsCreateManyInputObjectSchema, z.array(productsCreateManyInputObjectSchema) ]),  }).strict();