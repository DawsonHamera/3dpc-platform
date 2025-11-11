import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { printersCreateManyInputObjectSchema as printersCreateManyInputObjectSchema } from './objects/printersCreateManyInput.schema';

export const printersCreateManySchema: z.ZodType<Prisma.printersCreateManyArgs> = z.object({ data: z.union([ printersCreateManyInputObjectSchema, z.array(printersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.printersCreateManyArgs>;

export const printersCreateManyZodSchema = z.object({ data: z.union([ printersCreateManyInputObjectSchema, z.array(printersCreateManyInputObjectSchema) ]),  }).strict();