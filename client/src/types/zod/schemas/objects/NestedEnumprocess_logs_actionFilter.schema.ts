import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema'

const nestedenumprocess_logs_actionfilterSchema = z.object({
  equals: process_logs_actionSchema.optional(),
  in: process_logs_actionSchema.array().optional(),
  notIn: process_logs_actionSchema.array().optional(),
  not: z.union([process_logs_actionSchema, z.lazy(() => NestedEnumprocess_logs_actionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumprocess_logs_actionFilterObjectSchema: z.ZodType<Prisma.NestedEnumprocess_logs_actionFilter> = nestedenumprocess_logs_actionfilterSchema as unknown as z.ZodType<Prisma.NestedEnumprocess_logs_actionFilter>;
export const NestedEnumprocess_logs_actionFilterObjectZodSchema = nestedenumprocess_logs_actionfilterSchema;
