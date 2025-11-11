import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TaskStatusesOrderByRelevanceFieldEnumSchema as task_statusesOrderByRelevanceFieldEnumSchema } from '../enums/TaskStatusesOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([task_statusesOrderByRelevanceFieldEnumSchema, task_statusesOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const task_statusesOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.task_statusesOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.task_statusesOrderByRelevanceInput>;
export const task_statusesOrderByRelevanceInputObjectZodSchema = makeSchema();
