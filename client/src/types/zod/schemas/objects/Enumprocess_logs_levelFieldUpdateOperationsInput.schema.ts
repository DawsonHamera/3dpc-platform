import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_logs_levelSchema } from '../enums/process_logs_level.schema'

const makeSchema = () => z.object({
  set: process_logs_levelSchema.optional()
}).strict();
export const Enumprocess_logs_levelFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumprocess_logs_levelFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_logs_levelFieldUpdateOperationsInput>;
export const Enumprocess_logs_levelFieldUpdateOperationsInputObjectZodSchema = makeSchema();
