import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema'

const makeSchema = () => z.object({
  type: recycling_typeSchema,
  amount: z.number().int(),
  created_at: z.coerce.date().optional()
}).strict();
export const recycling_logCreateWithoutCreated_byInputObjectSchema: z.ZodType<Prisma.recycling_logCreateWithoutCreated_byInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logCreateWithoutCreated_byInput>;
export const recycling_logCreateWithoutCreated_byInputObjectZodSchema = makeSchema();
