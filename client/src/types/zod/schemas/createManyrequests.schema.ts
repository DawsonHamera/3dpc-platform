import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { requestsCreateManyInputObjectSchema as requestsCreateManyInputObjectSchema } from './objects/requestsCreateManyInput.schema';

export const requestsCreateManySchema: z.ZodType<Prisma.requestsCreateManyArgs> = z.object({ data: z.union([ requestsCreateManyInputObjectSchema, z.array(requestsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.requestsCreateManyArgs>;

export const requestsCreateManyZodSchema = z.object({ data: z.union([ requestsCreateManyInputObjectSchema, z.array(requestsCreateManyInputObjectSchema) ]),  }).strict();