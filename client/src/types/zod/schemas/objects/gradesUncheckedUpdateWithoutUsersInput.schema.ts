import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { grades_gradeSchema } from '../enums/grades_grade.schema';
import { Enumgrades_gradeFieldUpdateOperationsInputObjectSchema as Enumgrades_gradeFieldUpdateOperationsInputObjectSchema } from './Enumgrades_gradeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema as NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  grade: z.union([grades_gradeSchema, z.lazy(() => Enumgrades_gradeFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  created_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  updated_at: z.union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const gradesUncheckedUpdateWithoutUsersInputObjectSchema: z.ZodType<Prisma.gradesUncheckedUpdateWithoutUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.gradesUncheckedUpdateWithoutUsersInput>;
export const gradesUncheckedUpdateWithoutUsersInputObjectZodSchema = makeSchema();
