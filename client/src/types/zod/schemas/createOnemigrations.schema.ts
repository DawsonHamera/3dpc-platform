import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { migrationsSelectObjectSchema as migrationsSelectObjectSchema } from './objects/migrationsSelect.schema';
import { migrationsCreateInputObjectSchema as migrationsCreateInputObjectSchema } from './objects/migrationsCreateInput.schema';
import { migrationsUncheckedCreateInputObjectSchema as migrationsUncheckedCreateInputObjectSchema } from './objects/migrationsUncheckedCreateInput.schema';

export const migrationsCreateOneSchema: z.ZodType<Prisma.migrationsCreateArgs> = z.object({ select: migrationsSelectObjectSchema.optional(),  data: z.union([migrationsCreateInputObjectSchema, migrationsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.migrationsCreateArgs>;

export const migrationsCreateOneZodSchema = z.object({ select: migrationsSelectObjectSchema.optional(),  data: z.union([migrationsCreateInputObjectSchema, migrationsUncheckedCreateInputObjectSchema]) }).strict();