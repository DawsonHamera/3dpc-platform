import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsSelectObjectSchema as migrationsSelectObjectSchema } from './objects/migrationsSelect.schema';
import { migrationsWhereUniqueInputObjectSchema as migrationsWhereUniqueInputObjectSchema } from './objects/migrationsWhereUniqueInput.schema';
import { migrationsCreateInputObjectSchema as migrationsCreateInputObjectSchema } from './objects/migrationsCreateInput.schema';
import { migrationsUncheckedCreateInputObjectSchema as migrationsUncheckedCreateInputObjectSchema } from './objects/migrationsUncheckedCreateInput.schema';
import { migrationsUpdateInputObjectSchema as migrationsUpdateInputObjectSchema } from './objects/migrationsUpdateInput.schema';
import { migrationsUncheckedUpdateInputObjectSchema as migrationsUncheckedUpdateInputObjectSchema } from './objects/migrationsUncheckedUpdateInput.schema';

export const migrationsUpsertOneSchema: z.ZodType<Prisma.migrationsUpsertArgs> = z.object({ select: migrationsSelectObjectSchema.optional(),  where: migrationsWhereUniqueInputObjectSchema, create: z.union([ migrationsCreateInputObjectSchema, migrationsUncheckedCreateInputObjectSchema ]), update: z.union([ migrationsUpdateInputObjectSchema, migrationsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.migrationsUpsertArgs>;

export const migrationsUpsertOneZodSchema = z.object({ select: migrationsSelectObjectSchema.optional(),  where: migrationsWhereUniqueInputObjectSchema, create: z.union([ migrationsCreateInputObjectSchema, migrationsUncheckedCreateInputObjectSchema ]), update: z.union([ migrationsUpdateInputObjectSchema, migrationsUncheckedUpdateInputObjectSchema ]) }).strict();