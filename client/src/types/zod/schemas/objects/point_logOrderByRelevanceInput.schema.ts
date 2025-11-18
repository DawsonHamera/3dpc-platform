import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PointLogOrderByRelevanceFieldEnumSchema as point_logOrderByRelevanceFieldEnumSchema } from '../enums/PointLogOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([point_logOrderByRelevanceFieldEnumSchema, point_logOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const point_logOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.point_logOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logOrderByRelevanceInput>;
export const point_logOrderByRelevanceInputObjectZodSchema = makeSchema();
