import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsSelectObjectSchema as migrationsSelectObjectSchema } from './objects/migrationsSelect.schema';
import { migrationsWhereUniqueInputObjectSchema as migrationsWhereUniqueInputObjectSchema } from './objects/migrationsWhereUniqueInput.schema';

export const migrationsFindUniqueOrThrowSchema: z.ZodType<Prisma.migrationsFindUniqueOrThrowArgs> = z.object({ select: migrationsSelectObjectSchema.optional(),  where: migrationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.migrationsFindUniqueOrThrowArgs>;

export const migrationsFindUniqueOrThrowZodSchema = z.object({ select: migrationsSelectObjectSchema.optional(),  where: migrationsWhereUniqueInputObjectSchema }).strict();