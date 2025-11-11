import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsSelectObjectSchema as migrationsSelectObjectSchema } from './objects/migrationsSelect.schema';
import { migrationsUpdateInputObjectSchema as migrationsUpdateInputObjectSchema } from './objects/migrationsUpdateInput.schema';
import { migrationsUncheckedUpdateInputObjectSchema as migrationsUncheckedUpdateInputObjectSchema } from './objects/migrationsUncheckedUpdateInput.schema';
import { migrationsWhereUniqueInputObjectSchema as migrationsWhereUniqueInputObjectSchema } from './objects/migrationsWhereUniqueInput.schema';

export const migrationsUpdateOneSchema: z.ZodType<Prisma.migrationsUpdateArgs> = z.object({ select: migrationsSelectObjectSchema.optional(),  data: z.union([migrationsUpdateInputObjectSchema, migrationsUncheckedUpdateInputObjectSchema]), where: migrationsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.migrationsUpdateArgs>;

export const migrationsUpdateOneZodSchema = z.object({ select: migrationsSelectObjectSchema.optional(),  data: z.union([migrationsUpdateInputObjectSchema, migrationsUncheckedUpdateInputObjectSchema]), where: migrationsWhereUniqueInputObjectSchema }).strict();