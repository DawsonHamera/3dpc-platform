import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MigrationsOrderByRelevanceFieldEnumSchema as migrationsOrderByRelevanceFieldEnumSchema } from '../enums/MigrationsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([migrationsOrderByRelevanceFieldEnumSchema, migrationsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const migrationsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.migrationsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.migrationsOrderByRelevanceInput>;
export const migrationsOrderByRelevanceInputObjectZodSchema = makeSchema();
