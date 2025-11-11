import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TasksOrderByRelevanceFieldEnumSchema as tasksOrderByRelevanceFieldEnumSchema } from '../enums/TasksOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([tasksOrderByRelevanceFieldEnumSchema, tasksOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const tasksOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.tasksOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksOrderByRelevanceInput>;
export const tasksOrderByRelevanceInputObjectZodSchema = makeSchema();
