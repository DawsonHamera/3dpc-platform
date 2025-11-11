import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsSelectObjectSchema as migrationsSelectObjectSchema } from './objects/migrationsSelect.schema';
import { migrationsWhereUniqueInputObjectSchema as migrationsWhereUniqueInputObjectSchema } from './objects/migrationsWhereUniqueInput.schema';

export const migrationsFindUniqueSchema: z.ZodType<Prisma.migrationsFindUniqueArgs> = z.object({ select: migrationsSelectObjectSchema.optional(),  where: migrationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.migrationsFindUniqueArgs>;

export const migrationsFindUniqueZodSchema = z.object({ select: migrationsSelectObjectSchema.optional(),  where: migrationsWhereUniqueInputObjectSchema }).strict();