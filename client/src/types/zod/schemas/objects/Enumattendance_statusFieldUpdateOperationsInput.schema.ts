import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { attendance_statusSchema } from '../enums/attendance_status.schema'

const makeSchema = () => z.object({
  set: attendance_statusSchema.optional()
}).strict();
export const Enumattendance_statusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumattendance_statusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumattendance_statusFieldUpdateOperationsInput>;
export const Enumattendance_statusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
