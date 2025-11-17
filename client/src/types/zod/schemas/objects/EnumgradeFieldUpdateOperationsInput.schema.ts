import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { gradeSchema } from '../enums/grade.schema'

const makeSchema = () => z.object({
  set: gradeSchema.optional()
}).strict();
export const EnumgradeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumgradeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumgradeFieldUpdateOperationsInput>;
export const EnumgradeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
