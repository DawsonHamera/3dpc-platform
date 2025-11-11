import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsWhereInputObjectSchema as migrationsWhereInputObjectSchema } from './objects/migrationsWhereInput.schema';

export const migrationsDeleteManySchema: z.ZodType<Prisma.migrationsDeleteManyArgs> = z.object({ where: migrationsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.migrationsDeleteManyArgs>;

export const migrationsDeleteManyZodSchema = z.object({ where: migrationsWhereInputObjectSchema.optional() }).strict();