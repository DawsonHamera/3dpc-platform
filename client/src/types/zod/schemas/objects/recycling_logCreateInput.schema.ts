import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { userCreateNestedOneWithoutRecycling_logsInputObjectSchema as userCreateNestedOneWithoutRecycling_logsInputObjectSchema } from './userCreateNestedOneWithoutRecycling_logsInput.schema'

const makeSchema = () => z.object({
  type: recycling_typeSchema,
  amount: z.number().int(),
  created_at: z.coerce.date().optional(),
  created_by: z.lazy(() => userCreateNestedOneWithoutRecycling_logsInputObjectSchema)
}).strict();
export const recycling_logCreateInputObjectSchema: z.ZodType<Prisma.recycling_logCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logCreateInput>;
export const recycling_logCreateInputObjectZodSchema = makeSchema();
