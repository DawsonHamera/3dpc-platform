import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printer_statusesWhereUniqueInputObjectSchema as printer_statusesWhereUniqueInputObjectSchema } from './printer_statusesWhereUniqueInput.schema';
import { printer_statusesCreateWithoutPrintersInputObjectSchema as printer_statusesCreateWithoutPrintersInputObjectSchema } from './printer_statusesCreateWithoutPrintersInput.schema';
import { printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema as printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema } from './printer_statusesUncheckedCreateWithoutPrintersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printer_statusesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => printer_statusesCreateWithoutPrintersInputObjectSchema), z.lazy(() => printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema)])
}).strict();
export const printer_statusesCreateOrConnectWithoutPrintersInputObjectSchema: z.ZodType<Prisma.printer_statusesCreateOrConnectWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesCreateOrConnectWithoutPrintersInput>;
export const printer_statusesCreateOrConnectWithoutPrintersInputObjectZodSchema = makeSchema();
