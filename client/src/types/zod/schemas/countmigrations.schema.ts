import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsOrderByWithRelationInputObjectSchema as migrationsOrderByWithRelationInputObjectSchema } from './objects/migrationsOrderByWithRelationInput.schema';
import { migrationsWhereInputObjectSchema as migrationsWhereInputObjectSchema } from './objects/migrationsWhereInput.schema';
import { migrationsWhereUniqueInputObjectSchema as migrationsWhereUniqueInputObjectSchema } from './objects/migrationsWhereUniqueInput.schema';
import { MigrationsCountAggregateInputObjectSchema as MigrationsCountAggregateInputObjectSchema } from './objects/MigrationsCountAggregateInput.schema';

export const migrationsCountSchema: z.ZodType<Prisma.migrationsCountArgs> = z.object({ orderBy: z.union([migrationsOrderByWithRelationInputObjectSchema, migrationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: migrationsWhereInputObjectSchema.optional(), cursor: migrationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MigrationsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.migrationsCountArgs>;

export const migrationsCountZodSchema = z.object({ orderBy: z.union([migrationsOrderByWithRelationInputObjectSchema, migrationsOrderByWithRelationInputObjectSchema.array()]).optional(), where: migrationsWhereInputObjectSchema.optional(), cursor: migrationsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), MigrationsCountAggregateInputObjectSchema ]).optional() }).strict();