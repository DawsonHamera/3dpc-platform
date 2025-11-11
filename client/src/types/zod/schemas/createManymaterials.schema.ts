import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { materialsCreateManyInputObjectSchema as materialsCreateManyInputObjectSchema } from './objects/materialsCreateManyInput.schema';

export const materialsCreateManySchema: z.ZodType<Prisma.materialsCreateManyArgs> = z.object({ data: z.union([ materialsCreateManyInputObjectSchema, z.array(materialsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.materialsCreateManyArgs>;

export const materialsCreateManyZodSchema = z.object({ data: z.union([ materialsCreateManyInputObjectSchema, z.array(materialsCreateManyInputObjectSchema) ]),  }).strict();