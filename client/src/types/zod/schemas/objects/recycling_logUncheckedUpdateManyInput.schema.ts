import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { recycling_typeSchema } from '../enums/recycling_type.schema';
import { Enumrecycling_typeFieldUpdateOperationsInputObjectSchema as Enumrecycling_typeFieldUpdateOperationsInputObjectSchema } from './Enumrecycling_typeFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([recycling_typeSchema, z.lazy(() => Enumrecycling_typeFieldUpdateOperationsInputObjectSchema)]).optional(),
  amount: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const recycling_logUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.recycling_logUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logUncheckedUpdateManyInput>;
export const recycling_logUncheckedUpdateManyInputObjectZodSchema = makeSchema();
