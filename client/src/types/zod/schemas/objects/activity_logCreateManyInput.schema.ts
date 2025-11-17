import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  user_id: z.number().int(),
  action_type: z.string().max(255),
  table_name: z.string().max(100),
  record_id: z.number().int(),
  result: z.string().max(50),
  details: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  created_at: z.coerce.date().optional().nullable()
}).strict();
export const activity_logCreateManyInputObjectSchema: z.ZodType<Prisma.activity_logCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logCreateManyInput>;
export const activity_logCreateManyInputObjectZodSchema = makeSchema();
