import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instance_steps_statusSchema } from '../enums/process_instance_steps_status.schema'

const makeSchema = () => z.object({
  set: process_instance_steps_statusSchema.optional()
}).strict();
export const Enumprocess_instance_steps_statusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumprocess_instance_steps_statusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_instance_steps_statusFieldUpdateOperationsInput>;
export const Enumprocess_instance_steps_statusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
