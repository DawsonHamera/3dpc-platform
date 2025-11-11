import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UsersOrderByRelevanceFieldEnumSchema as usersOrderByRelevanceFieldEnumSchema } from '../enums/UsersOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([usersOrderByRelevanceFieldEnumSchema, usersOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const usersOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.usersOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.usersOrderByRelevanceInput>;
export const usersOrderByRelevanceInputObjectZodSchema = makeSchema();
