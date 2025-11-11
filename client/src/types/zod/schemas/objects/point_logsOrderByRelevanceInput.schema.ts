import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PointLogsOrderByRelevanceFieldEnumSchema as point_logsOrderByRelevanceFieldEnumSchema } from '../enums/PointLogsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([point_logsOrderByRelevanceFieldEnumSchema, point_logsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const point_logsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.point_logsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logsOrderByRelevanceInput>;
export const point_logsOrderByRelevanceInputObjectZodSchema = makeSchema();
