import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: recycling_typeSchema,
  amount: z.number().int(),
  created_at: z.coerce.date().optional(),
  user_id: z.number().int()
}).strict();
export const recycling_logCreateManyInputObjectSchema: z.ZodType<Prisma.recycling_logCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logCreateManyInput>;
export const recycling_logCreateManyInputObjectZodSchema = makeSchema();
