import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsCreateManyInputObjectSchema as migrationsCreateManyInputObjectSchema } from './objects/migrationsCreateManyInput.schema';

export const migrationsCreateManySchema: z.ZodType<Prisma.migrationsCreateManyArgs> = z.object({ data: z.union([ migrationsCreateManyInputObjectSchema, z.array(migrationsCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.migrationsCreateManyArgs>;

export const migrationsCreateManyZodSchema = z.object({ data: z.union([ migrationsCreateManyInputObjectSchema, z.array(migrationsCreateManyInputObjectSchema) ]),  }).strict();