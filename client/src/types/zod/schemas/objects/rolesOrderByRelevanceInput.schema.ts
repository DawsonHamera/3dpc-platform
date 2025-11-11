import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RolesOrderByRelevanceFieldEnumSchema as rolesOrderByRelevanceFieldEnumSchema } from '../enums/RolesOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([rolesOrderByRelevanceFieldEnumSchema, rolesOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const rolesOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.rolesOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.rolesOrderByRelevanceInput>;
export const rolesOrderByRelevanceInputObjectZodSchema = makeSchema();
