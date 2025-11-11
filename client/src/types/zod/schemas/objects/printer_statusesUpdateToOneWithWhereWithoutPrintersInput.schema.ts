import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printer_statusesWhereInputObjectSchema as printer_statusesWhereInputObjectSchema } from './printer_statusesWhereInput.schema';
import { printer_statusesUpdateWithoutPrintersInputObjectSchema as printer_statusesUpdateWithoutPrintersInputObjectSchema } from './printer_statusesUpdateWithoutPrintersInput.schema';
import { printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema as printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema } from './printer_statusesUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printer_statusesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => printer_statusesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema)])
}).strict();
export const printer_statusesUpdateToOneWithWhereWithoutPrintersInputObjectSchema: z.ZodType<Prisma.printer_statusesUpdateToOneWithWhereWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesUpdateToOneWithWhereWithoutPrintersInput>;
export const printer_statusesUpdateToOneWithWhereWithoutPrintersInputObjectZodSchema = makeSchema();
