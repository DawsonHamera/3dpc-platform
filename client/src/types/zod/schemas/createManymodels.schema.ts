import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { modelsCreateManyInputObjectSchema as modelsCreateManyInputObjectSchema } from './objects/modelsCreateManyInput.schema';

export const modelsCreateManySchema: z.ZodType<Prisma.modelsCreateManyArgs> = z.object({ data: z.union([ modelsCreateManyInputObjectSchema, z.array(modelsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.modelsCreateManyArgs>;

export const modelsCreateManyZodSchema = z.object({ data: z.union([ modelsCreateManyInputObjectSchema, z.array(modelsCreateManyInputObjectSchema) ]),  }).strict();