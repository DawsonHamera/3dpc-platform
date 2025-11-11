import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProcessInstanceStepsOrderByRelevanceFieldEnumSchema as process_instance_stepsOrderByRelevanceFieldEnumSchema } from '../enums/ProcessInstanceStepsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  fields: z.union([process_instance_stepsOrderByRelevanceFieldEnumSchema, process_instance_stepsOrderByRelevanceFieldEnumSchema.array()]),
  sort: SortOrderSchema,
  search: z.string()
}).strict();
export const process_instance_stepsOrderByRelevanceInputObjectSchema: z.ZodType<Prisma.process_instance_stepsOrderByRelevanceInput> = makeSchema() as unknown as z.ZodType<Prisma.process_instance_stepsOrderByRelevanceInput>;
export const process_instance_stepsOrderByRelevanceInputObjectZodSchema = makeSchema();
