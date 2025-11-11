import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProcessInstancesOrderByRelevanceFieldEnumSchema as process_instancesOrderByRelevanceFieldEnumSchema } from '../enums/ProcessInstancesOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([process_instancesOrderByRelevanceFieldEnumSchema, process_instancesOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const process_instancesOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.process_instancesOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instancesOrderByRelevanceInput>;
export const process_instancesOrderByRelevanceInputObjectZodSchema = makeSchema();
