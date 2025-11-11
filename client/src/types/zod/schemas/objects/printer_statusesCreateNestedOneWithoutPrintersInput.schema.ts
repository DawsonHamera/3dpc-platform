import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printer_statusesCreateWithoutPrintersInputObjectSchema as printer_statusesCreateWithoutPrintersInputObjectSchema } from './printer_statusesCreateWithoutPrintersInput.schema';
import { printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema as printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema } from './printer_statusesUncheckedCreateWithoutPrintersInput.schema';
import { printer_statusesCreateOrConnectWithoutPrintersInputObjectSchema as printer_statusesCreateOrConnectWithoutPrintersInputObjectSchema } from './printer_statusesCreateOrConnectWithoutPrintersInput.schema';
import { printer_statusesWhereUniqueInputObjectSchema as printer_statusesWhereUniqueInputObjectSchema } from './printer_statusesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printer_statusesCreateWithoutPrintersInputObjectSchema), z.lazy(() => printer_statusesUncheckedCreateWithoutPrintersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => printer_statusesCreateOrConnectWithoutPrintersInputObjectSchema).optional(),
  connect: z.lazy(() => printer_statusesWhereUniqueInputObjectSchema).optional()
}).strict();
export const printer_statusesCreateNestedOneWithoutPrintersInputObjectSchema: z.ZodType<Prisma.printer_statusesCreateNestedOneWithoutPrintersInput> = makeSchema() as unknown as z.ZodType<Prisma.printer_statusesCreateNestedOneWithoutPrintersInput>;
export const printer_statusesCreateNestedOneWithoutPrintersInputObjectZodSchema = makeSchema();
