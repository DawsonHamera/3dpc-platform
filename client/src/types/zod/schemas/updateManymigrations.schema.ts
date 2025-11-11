import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsUpdateManyMutationInputObjectSchema as migrationsUpdateManyMutationInputObjectSchema } from './objects/migrationsUpdateManyMutationInput.schema';
import { migrationsWhereInputObjectSchema as migrationsWhereInputObjectSchema } from './objects/migrationsWhereInput.schema';

export const migrationsUpdateManySchema: z.ZodType<Prisma.migrationsUpdateManyArgs> = z.object({ data: migrationsUpdateManyMutationInputObjectSchema, where: migrationsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.migrationsUpdateManyArgs>;

export const migrationsUpdateManyZodSchema = z.object({ data: migrationsUpdateManyMutationInputObjectSchema, where: migrationsWhereInputObjectSchema.optional() }).strict();