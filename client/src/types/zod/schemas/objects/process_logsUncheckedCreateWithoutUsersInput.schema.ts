import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  process_instance_id: z.number().int(),
  step_order: z.number().int().optional().nullable(),
  level: process_logs_levelSchema.optional(),
  action: process_logs_actionSchema,
  message: z.string(),
  data: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  deleted_at: z.coerce.date().optional().nullable(),
  updated_at: z.coerce.date().optional()
}).strict();
export const process_logsUncheckedCreateWithoutUsersInputObjectSchema: z.ZodType<Prisma.process_logsUncheckedCreateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.process_logsUncheckedCreateWithoutUsersInput>;
export const process_logsUncheckedCreateWithoutUsersInputObjectZodSchema = makeSchema();
