import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { usersCreateManyInputObjectSchema as usersCreateManyInputObjectSchema } from './objects/usersCreateManyInput.schema';

export const usersCreateManySchema: z.ZodType<Prisma.usersCreateManyArgs> = z.object({ data: z.union([ usersCreateManyInputObjectSchema, z.array(usersCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.usersCreateManyArgs>;

export const usersCreateManyZodSchema = z.object({ data: z.union([ usersCreateManyInputObjectSchema, z.array(usersCreateManyInputObjectSchema) ]),  }).strict();