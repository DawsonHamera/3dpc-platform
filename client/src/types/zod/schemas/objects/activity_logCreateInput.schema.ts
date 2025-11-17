import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { userCreateNestedOneWithoutActivity_logsInputObjectSchema as userCreateNestedOneWithoutActivity_logsInputObjectSchema } from './userCreateNestedOneWithoutActivity_logsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  action_type: z.string().max(255),
  table_name: z.string().max(100),
  record_id: z.number().int(),
  result: z.string().max(50),
  details: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  created_at: z.coerce.date().optional().nullable(),
  user: z.lazy(() => userCreateNestedOneWithoutActivity_logsInputObjectSchema)
}).strict();
export const activity_logCreateInputObjectSchema: z.ZodType<Prisma.activity_logCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logCreateInput>;
export const activity_logCreateInputObjectZodSchema = makeSchema();
