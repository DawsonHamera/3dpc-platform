import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  action_type: z.string().max(255),
  table_name: z.string().max(100),
  record_id: z.number().int(),
  result: z.string().max(50),
  details: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const activity_logsCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logsCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsCreateWithoutUserInput>;
export const activity_logsCreateWithoutUserInputObjectZodSchema = makeSchema();
