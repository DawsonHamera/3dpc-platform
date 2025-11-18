import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema'

const makeSchema = () => z.object({
  id: z.number().int().optional(),
  type: recycling_typeSchema,
  amount: z.number().int(),
  created_at: z.coerce.date().optional()
}).strict();
export const recycling_logCreateManyCreated_byInputObjectSchema: z.ZodType<Prisma.recycling_logCreateManyCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logCreateManyCreated_byInput>;
export const recycling_logCreateManyCreated_byInputObjectZodSchema = makeSchema();
