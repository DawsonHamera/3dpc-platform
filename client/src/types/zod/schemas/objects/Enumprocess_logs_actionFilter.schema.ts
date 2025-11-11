import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema';
import { NestedEnumprocess_logs_actionFilterObjectSchema as NestedEnumprocess_logs_actionFilterObjectSchema } from './NestedEnumprocess_logs_actionFilter.schema'

const makeSchema = () => z.object({
  equals: process_logs_actionSchema.optional(),
  in: process_logs_actionSchema.array().optional(),
  notIn: process_logs_actionSchema.array().optional(),
  not: z.union([process_logs_actionSchema, z.lazy(() => NestedEnumprocess_logs_actionFilterObjectSchema)]).optional()
}).strict();
export const Enumprocess_logs_actionFilterObjectSchema: z.ZodType<Prisma.Enumprocess_logs_actionFilter> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_logs_actionFilter>;
export const Enumprocess_logs_actionFilterObjectZodSchema = makeSchema();
