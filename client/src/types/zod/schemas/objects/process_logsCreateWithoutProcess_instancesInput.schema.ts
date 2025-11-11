import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema';
import { usersCreateNestedOneWithoutProcess_logsInputObjectSchema as usersCreateNestedOneWithoutProcess_logsInputObjectSchema } from './usersCreateNestedOneWithoutProcess_logsInput.schema'

const makeSchema = () => z.object({
  step_order: z.number().int().optional().nullable(),
  level: process_logs_levelSchema.optional(),
  action: process_logs_actionSchema,
  message: z.string(),
  data: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional(),
  users: z.lazy(() => usersCreateNestedOneWithoutProcess_logsInputObjectSchema).optional()
}).strict();
export const process_logsCreateWithoutProcess_instancesInputObjectSchema: z.ZodType<Prisma.process_logsCreateWithoutProcess_instancesInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsCreateWithoutProcess_instancesInput>;
export const process_logsCreateWithoutProcess_instancesInputObjectZodSchema = makeSchema();
