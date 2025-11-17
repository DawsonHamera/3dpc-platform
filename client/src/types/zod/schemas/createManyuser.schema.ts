import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { userCreateManyInputObjectSchema as userCreateManyInputObjectSchema } from './objects/userCreateManyInput.schema';

export const userCreateManySchema: z.ZodType<Prisma.userCreateManyArgs> = z.object({ data: z.union([ userCreateManyInputObjectSchema, z.array(userCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.userCreateManyArgs>;

export const userCreateManyZodSchema = z.object({ data: z.union([ userCreateManyInputObjectSchema, z.array(userCreateManyInputObjectSchema) ]),  }).strict();