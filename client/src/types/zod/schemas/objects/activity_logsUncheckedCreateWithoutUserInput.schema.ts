import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  action_type: z.string(),
  table_name: z.string(),
  record_id: z.number().int(),
  result: z.string(),
  details: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const activity_logsUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.activity_logsUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsUncheckedCreateWithoutUserInput>;
export const activity_logsUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
