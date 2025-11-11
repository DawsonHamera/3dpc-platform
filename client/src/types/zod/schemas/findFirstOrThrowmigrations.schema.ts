import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsOrderByWithRelationInputObjectSchema as migrationsOrderByWithRelationInputObjectSchema } from './objects/migrationsOrderByWithRelationInput.schema';
import { migrationsWhereInputObjectSchema as migrationsWhereInputObjectSchema } from './objects/migrationsWhereInput.schema';
import { migrationsWhereUniqueInputObjectSchema as migrationsWhereUniqueInputObjectSchema } from './objects/migrationsWhereUniqueInput.schema';
import { MigrationsScalarFieldEnumSchema } from './enums/MigrationsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const migrationsFindFirstOrThrowSelectSchema: z.ZodType<Prisma.migrationsSelect> = z.object({
    id: z.boolean().optional(),
    version: z.boolean().optional(),
    class: z.boolean().optional(),
    group: z.boolean().optional(),
    namespace: z.boolean().optional(),
    time: z.boolean().optional(),
    batch: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.migrationsSelect>;

export const migrationsFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    version: z.boolean().optional(),
    class: z.boolean().optional(),
    group: z.boolean().optional(),
    namespace: z.boolean().optional(),
    time: z.boolean().optional(),
    batch: z.boolean().optional()
  }).strict();

export const migrationsFindFirstOrThrowSchema: z.ZodType<Prisma.migrationsFindFirstOrThrowArgs> = z.object({ select: migrationsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([migrationsOrderByWithRelationInputObjectSchema, migrationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: migrationsWhereInputObjectSchema.optional(), cursor: migrationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MigrationsScalarFieldEnumSchema, MigrationsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.migrationsFindFirstOrThrowArgs>;

export const migrationsFindFirstOrThrowZodSchema = z.object({ select: migrationsFindFirstOrThrowSelectSchema.optional(),  orderBy: z.union([migrationsOrderByWithRelationInputObjectSchema, migrationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: migrationsWhereInputObjectSchema.optional(), cursor: migrationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([MigrationsScalarFieldEnumSchema, MigrationsScalarFieldEnumSchema.array()]).optional() }).strict();