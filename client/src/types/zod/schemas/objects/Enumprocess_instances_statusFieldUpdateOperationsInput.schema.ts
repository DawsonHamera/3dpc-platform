import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { process_instances_statusSchema } from '../enums/process_instances_status.schema'

const makeSchema = () => z.object({
  set: process_instances_statusSchema.optional()
}).strict();
export const Enumprocess_instances_statusFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumprocess_instances_statusFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumprocess_instances_statusFieldUpdateOperationsInput>;
export const Enumprocess_instances_statusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
