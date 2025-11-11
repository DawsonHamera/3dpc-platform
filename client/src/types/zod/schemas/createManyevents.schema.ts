import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { eventsCreateManyInputObjectSchema as eventsCreateManyInputObjectSchema } from './objects/eventsCreateManyInput.schema';

export const eventsCreateManySchema: z.ZodType<Prisma.eventsCreateManyArgs> = z.object({ data: z.union([ eventsCreateManyInputObjectSchema, z.array(eventsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.eventsCreateManyArgs>;

export const eventsCreateManyZodSchema = z.object({ data: z.union([ eventsCreateManyInputObjectSchema, z.array(eventsCreateManyInputObjectSchema) ]),  }).strict();