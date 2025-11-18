import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema'

const makeSchema = () => z.object({
  set: recycling_typeSchema.optional()
}).strict();
export const Enumrecycling_typeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumrecycling_typeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumrecycling_typeFieldUpdateOperationsInput>;
export const Enumrecycling_typeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
