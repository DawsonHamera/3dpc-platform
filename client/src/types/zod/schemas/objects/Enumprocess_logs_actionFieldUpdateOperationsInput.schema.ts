import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_actionSchema } from '../enums/process_logs_action.schema'

const makeSchema = () => z.object({
  set: process_logs_actionSchema.optional()
}).strict();
export const Enumprocess_logs_actionFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumprocess_logs_actionFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_logs_actionFieldUpdateOperationsInput>;
export const Enumprocess_logs_actionFieldUpdateOperationsInputObjectZodSchema = makeSchema();
