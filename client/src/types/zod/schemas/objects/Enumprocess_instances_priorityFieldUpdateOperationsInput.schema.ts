import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_prioritySchema } from '../enums/process_instances_priority.schema'

const makeSchema = () => z.object({
  set: process_instances_prioritySchema.optional()
}).strict();
export const Enumprocess_instances_priorityFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumprocess_instances_priorityFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_instances_priorityFieldUpdateOperationsInput>;
export const Enumprocess_instances_priorityFieldUpdateOperationsInputObjectZodSchema = makeSchema();
