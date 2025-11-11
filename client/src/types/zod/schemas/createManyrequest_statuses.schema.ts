import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { request_statusesCreateManyInputObjectSchema as request_statusesCreateManyInputObjectSchema } from './objects/request_statusesCreateManyInput.schema';

export const request_statusesCreateManySchema: z.ZodType<Prisma.request_statusesCreateManyArgs> = z.object({ data: z.union([ request_statusesCreateManyInputObjectSchema, z.array(request_statusesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.request_statusesCreateManyArgs>;

export const request_statusesCreateManyZodSchema = z.object({ data: z.union([ request_statusesCreateManyInputObjectSchema, z.array(request_statusesCreateManyInputObjectSchema) ]),  }).strict();