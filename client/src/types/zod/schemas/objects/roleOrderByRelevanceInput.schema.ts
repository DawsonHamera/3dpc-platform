import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleOrderByRelevanceFieldEnumSchema as roleOrderByRelevanceFieldEnumSchema } from '../enums/RoleOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([roleOrderByRelevanceFieldEnumSchema, roleOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const roleOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.roleOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.roleOrderByRelevanceInput>;
export const roleOrderByRelevanceInputObjectZodSchema = makeSchema();
