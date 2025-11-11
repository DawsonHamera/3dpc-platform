import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema'

const nestedenumprocess_logs_levelfilterSchema = z.object({
  equals: process_logs_levelSchema.optional(),
  in: process_logs_levelSchema.array().optional(),
  notIn: process_logs_levelSchema.array().optional(),
  not: z.union([process_logs_levelSchema, z.lazy(() => NestedEnumprocess_logs_levelFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumprocess_logs_levelFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_logs_levelFilter> = nestedenumprocess_logs_levelfilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_logs_levelFilter>;
export const NestedEnumprocess_logs_levelFilterObjectZodSchema = nestedenumprocess_logs_levelfilterSchema;
