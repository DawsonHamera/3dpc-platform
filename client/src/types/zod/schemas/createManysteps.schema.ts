import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { stepsCreateManyInputObjectSchema as stepsCreateManyInputObjectSchema } from './objects/stepsCreateManyInput.schema';

export const stepsCreateManySchema: z.ZodType<Prisma.stepsCreateManyArgs> = z.object({ data: z.union([ stepsCreateManyInputObjectSchema, z.array(stepsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.stepsCreateManyArgs>;

export const stepsCreateManyZodSchema = z.object({ data: z.union([ stepsCreateManyInputObjectSchema, z.array(stepsCreateManyInputObjectSchema) ]),  }).strict();