import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { shop_sectionsCreateManyInputObjectSchema as shop_sectionsCreateManyInputObjectSchema } from './objects/shop_sectionsCreateManyInput.schema';

export const shop_sectionsCreateManySchema: z.ZodType<Prisma.shop_sectionsCreateManyArgs> = z.object({ data: z.union([ shop_sectionsCreateManyInputObjectSchema, z.array(shop_sectionsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.shop_sectionsCreateManyArgs>;

export const shop_sectionsCreateManyZodSchema = z.object({ data: z.union([ shop_sectionsCreateManyInputObjectSchema, z.array(shop_sectionsCreateManyInputObjectSchema) ]),  }).strict();