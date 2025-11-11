import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsSelectObjectSchema as migrationsSelectObjectSchema } from './objects/migrationsSelect.schema';
import { migrationsWhereUniqueInputObjectSchema as migrationsWhereUniqueInputObjectSchema } from './objects/migrationsWhereUniqueInput.schema';

export const migrationsDeleteOneSchema: z.ZodType<Prisma.migrationsDeleteArgs> = z.object({ select: migrationsSelectObjectSchema.optional(),  where: migrationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.migrationsDeleteArgs>;

export const migrationsDeleteOneZodSchema = z.object({ select: migrationsSelectObjectSchema.optional(),  where: migrationsWhereUniqueInputObjectSchema }).strict();