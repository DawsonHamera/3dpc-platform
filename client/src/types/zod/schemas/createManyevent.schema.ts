import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventCreateManyInputObjectSchema as eventCreateManyInputObjectSchema } from './objects/eventCreateManyInput.schema';

export const eventCreateManySchema: z.ZodType<Prisma.eventCreateManyArgs> = z.object({ data: z.union([ eventCreateManyInputObjectSchema, z.array(eventCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.eventCreateManyArgs>;

export const eventCreateManyZodSchema = z.object({ data: z.union([ eventCreateManyInputObjectSchema, z.array(eventCreateManyInputObjectSchema) ]),  }).strict();