import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { recycling_logCreateManyInputObjectSchema as recycling_logCreateManyInputObjectSchema } from './objects/recycling_logCreateManyInput.schema';

export const recycling_logCreateManySchema: z.ZodType<Prisma.recycling_logCreateManyArgs> = z.object({ data: z.union([ recycling_logCreateManyInputObjectSchema, z.array(recycling_logCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.recycling_logCreateManyArgs>;

export const recycling_logCreateManyZodSchema = z.object({ data: z.union([ recycling_logCreateManyInputObjectSchema, z.array(recycling_logCreateManyInputObjectSchema) ]),  }).strict();