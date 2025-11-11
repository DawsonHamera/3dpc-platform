import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { Enumgrades_gradeFieldUpdateOperationsInputObjectSchema as Enumgrades_gradeFieldUpdateOperationsInputObjectSchema } from './Enumgrades_gradeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { usersUpdateManyWithoutGradeNestedInputObjectSchema as usersUpdateManyWithoutGradeNestedInputObjectSchema } from './usersUpdateManyWithoutGradeNestedInput.schema'

const makeSchema = () => z.object({
  grade: z.union([grades_gradeSchema, z.lazy(() => Enumgrades_gradeFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  users: z.lazy(() => usersUpdateManyWithoutGradeNestedInputObjectSchema).optional()
}).strict();
export const gradesUpdateInputObjectSchema: z.ZodType<Prisma.gradesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesUpdateInput>;
export const gradesUpdateInputObjectZodSchema = makeSchema();
