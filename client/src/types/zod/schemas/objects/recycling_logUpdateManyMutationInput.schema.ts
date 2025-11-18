import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { Enumrecycling_typeFieldUpdateOperationsInputObjectSchema as Enumrecycling_typeFieldUpdateOperationsInputObjectSchema } from './Enumrecycling_typeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  type: z.union([recycling_typeSchema, z.lazy(() => Enumrecycling_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  amount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const recycling_logUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.recycling_logUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logUpdateManyMutationInput>;
export const recycling_logUpdateManyMutationInputObjectZodSchema = makeSchema();
