import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { customersCreateManyInputObjectSchema as customersCreateManyInputObjectSchema } from './objects/customersCreateManyInput.schema';

export const customersCreateManySchema: z.ZodType<Prisma.customersCreateManyArgs> = z.object({ data: z.union([ customersCreateManyInputObjectSchema, z.array(customersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.customersCreateManyArgs>;

export const customersCreateManyZodSchema = z.object({ data: z.union([ customersCreateManyInputObjectSchema, z.array(customersCreateManyInputObjectSchema) ]),  }).strict();