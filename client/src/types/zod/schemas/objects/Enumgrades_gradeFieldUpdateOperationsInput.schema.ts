import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema'

const makeSchema = () => z.object({
  set: grades_gradeSchema.optional()
}).strict();
export const Enumgrades_gradeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumgrades_gradeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumgrades_gradeFieldUpdateOperationsInput>;
export const Enumgrades_gradeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
