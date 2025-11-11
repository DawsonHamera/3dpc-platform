import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { gradesCreateManyInputObjectSchema as gradesCreateManyInputObjectSchema } from './objects/gradesCreateManyInput.schema';

export const gradesCreateManySchema: z.ZodType<Prisma.gradesCreateManyArgs> = z.object({ data: z.union([ gradesCreateManyInputObjectSchema, z.array(gradesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.gradesCreateManyArgs>;

export const gradesCreateManyZodSchema = z.object({ data: z.union([ gradesCreateManyInputObjectSchema, z.array(gradesCreateManyInputObjectSchema) ]),  }).strict();