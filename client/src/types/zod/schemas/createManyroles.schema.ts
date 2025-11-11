import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { rolesCreateManyInputObjectSchema as rolesCreateManyInputObjectSchema } from './objects/rolesCreateManyInput.schema';

export const rolesCreateManySchema: z.ZodType<Prisma.rolesCreateManyArgs> = z.object({ data: z.union([ rolesCreateManyInputObjectSchema, z.array(rolesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.rolesCreateManyArgs>;

export const rolesCreateManyZodSchema = z.object({ data: z.union([ rolesCreateManyInputObjectSchema, z.array(rolesCreateManyInputObjectSchema) ]),  }).strict();