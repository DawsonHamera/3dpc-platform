import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema';
import { process_instancesCreateNestedOneWithoutProcess_logsInputObjectSchema as process_instancesCreateNestedOneWithoutProcess_logsInputObjectSchema } from './process_instancesCreateNestedOneWithoutProcess_logsInput.schema'

const makeSchema = () => z.object({
  step_order: z.number().int().optional().nullable(),
  level: process_logs_levelSchema.optional(),
  action: process_logs_actionSchema,
  message: z.string(),
  data: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional(),
  process_instances: z.lazy(() => process_instancesCreateNestedOneWithoutProcess_logsInputObjectSchema)
}).strict();
export const process_logsCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_logsCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsCreateWithoutUsersInput>;
export const process_logsCreateWithoutUsersInputObjectZodSchema = makeSchema();
