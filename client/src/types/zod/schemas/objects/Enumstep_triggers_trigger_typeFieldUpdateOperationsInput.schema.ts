import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggers_trigger_typeSchema } from '../enums/step_triggers_trigger_type.schema'

const makeSchema = () => z.object({
  set: step_triggers_trigger_typeSchema.optional()
}).strict();
export const Enumstep_triggers_trigger_typeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumstep_triggers_trigger_typeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumstep_triggers_trigger_typeFieldUpdateOperationsInput>;
export const Enumstep_triggers_trigger_typeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
