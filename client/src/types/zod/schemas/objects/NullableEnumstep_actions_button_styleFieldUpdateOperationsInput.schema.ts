import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_actions_button_styleSchema } from '../enums/step_actions_button_style.schema'

const makeSchema = () => z.object({
  set: step_actions_button_styleSchema.optional()
}).strict();
export const NullableEnumstep_actions_button_styleFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumstep_actions_button_styleFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumstep_actions_button_styleFieldUpdateOperationsInput>;
export const NullableEnumstep_actions_button_styleFieldUpdateOperationsInputObjectZodSchema = makeSchema();
