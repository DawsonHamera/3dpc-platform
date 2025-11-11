import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printer_statusesUpdateWithoutPrintersInputObjectSchema as printer_statusesUpdateWithoutPrintersInputObjectSchema } from './printer_statusesUpdateWithoutPrintersInput.schema';
import { printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema as printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema } from './printer_statusesUncheckedUpdateWithoutPrintersInput.schema';
import { printer_statusesCreateWithoutPrintersInputObjectSchema as printer_statusesCreateWithoutPrintersInputObjectSchema } from './printer_statusesCreateWithoutPrintersInput.schema';
import { printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema as printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema } from './printer_statusesUncheckedCreateWithoutPrintersInput.schema';
import { printer_statusesWhereInputObjectSchema as printer_statusesWhereInputObjectSchema } from './printer_statusesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => printer_statusesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema)]),
  create: z.union([z.lazy(() => printer_statusesCreateWithoutPrintersInputObjectSchema), z.lazy(() => printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema)]),
  where: z.lazy(() => printer_statusesWhereInputObjectSchema).optional()
}).strict();
export const printer_statusesUpsertWithoutPrintersInputObjectSchema: z.ZodType<Prisma.printer_statusesUpsertWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesUpsertWithoutPrintersInput>;
export const printer_statusesUpsertWithoutPrintersInputObjectZodSchema = makeSchema();
