import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { file_typeSchema } from '../enums/file_type.schema'

const makeSchema = () => z.object({
  set: file_typeSchema.optional()
}).strict();
export const Enumfile_typeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.Enumfile_typeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.Enumfile_typeFieldUpdateOperationsInput>;
export const Enumfile_typeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
