import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithoutPrinter_statusesInputObjectSchema as printersUpdateWithoutPrinter_statusesInputObjectSchema } from './printersUpdateWithoutPrinter_statusesInput.schema';
import { printersUncheckedUpdateWithoutPrinter_statusesInputObjectSchema as printersUncheckedUpdateWithoutPrinter_statusesInputObjectSchema } from './printersUncheckedUpdateWithoutPrinter_statusesInput.schema';
import { printersCreateWithoutPrinter_statusesInputObjectSchema as printersCreateWithoutPrinter_statusesInputObjectSchema } from './printersCreateWithoutPrinter_statusesInput.schema';
import { printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema as printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema } from './printersUncheckedCreateWithoutPrinter_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => printersUpdateWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutPrinter_statusesInputObjectSchema)]),
  create: z.union([z.lazy(() => printersCreateWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema)])
}).strict();
export const printersUpsertWithWhereUniqueWithoutPrinter_statusesInputObjectSchema: z.ZodType<Prisma.printersUpsertWithWhereUniqueWithoutPrinter_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpsertWithWhereUniqueWithoutPrinter_statusesInput>;
export const printersUpsertWithWhereUniqueWithoutPrinter_statusesInputObjectZodSchema = makeSchema();
