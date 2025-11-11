import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { steps_step_typeSchema } from '../enums/steps_step_type.schema'

const makeSchema = () => z.object({
  set: steps_step_typeSchema.optional()
}).strict();
export const NullableEnumsteps_step_typeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumsteps_step_typeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumsteps_step_typeFieldUpdateOperationsInput>;
export const NullableEnumsteps_step_typeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
