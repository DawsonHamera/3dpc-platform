import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printer_statusesCreateWithoutPrintersInputObjectSchema as printer_statusesCreateWithoutPrintersInputObjectSchema } from './printer_statusesCreateWithoutPrintersInput.schema';
import { printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema as printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema } from './printer_statusesUncheckedCreateWithoutPrintersInput.schema';
import { printer_statusesCreateOrConnectWithoutPrintersInputObjectSchema as printer_statusesCreateOrConnectWithoutPrintersInputObjectSchema } from './printer_statusesCreateOrConnectWithoutPrintersInput.schema';
import { printer_statusesUpsertWithoutPrintersInputObjectSchema as printer_statusesUpsertWithoutPrintersInputObjectSchema } from './printer_statusesUpsertWithoutPrintersInput.schema';
import { printer_statusesWhereUniqueInputObjectSchema as printer_statusesWhereUniqueInputObjectSchema } from './printer_statusesWhereUniqueInput.schema';
import { printer_statusesUpdateToOneWithWhereWithoutPrintersInputObjectSchema as printer_statusesUpdateToOneWithWhereWithoutPrintersInputObjectSchema } from './printer_statusesUpdateToOneWithWhereWithoutPrintersInput.schema';
import { printer_statusesUpdateWithoutPrintersInputObjectSchema as printer_statusesUpdateWithoutPrintersInputObjectSchema } from './printer_statusesUpdateWithoutPrintersInput.schema';
import { printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema as printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema } from './printer_statusesUncheckedUpdateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printer_statusesCreateWithoutPrintersInputObjectSchema), z.lazy(() => printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => printer_statusesCreateOrConnectWithoutPrintersInputObjectSchema).optional(),
  upsert: z.lazy(() => printer_statusesUpsertWithoutPrintersInputObjectSchema).optional(),
  connect: z.lazy(() => printer_statusesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => printer_statusesUpdateToOneWithWhereWithoutPrintersInputObjectSchema), z.lazy(() => printer_statusesUpdateWithoutPrintersInputObjectSchema), z.lazy(() => printer_statusesUncheckedUpdateWithoutPrintersInputObjectSchema)]).optional()
}).strict();
export const printer_statusesUpdateOneRequiredWithoutPrintersNestedInputObjectSchema: z.ZodType<Prisma.printer_statusesUpdateOneRequiredWithoutPrintersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesUpdateOneRequiredWithoutPrintersNestedInput>;
export const printer_statusesUpdateOneRequiredWithoutPrintersNestedInputObjectZodSchema = makeSchema();
