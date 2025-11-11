import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithoutPrinter_statusesInputObjectSchema as printersUpdateWithoutPrinter_statusesInputObjectSchema } from './printersUpdateWithoutPrinter_statusesInput.schema';
import { printersUncheckedUpdateWithoutPrinter_statusesInputObjectSchema as printersUncheckedUpdateWithoutPrinter_statusesInputObjectSchema } from './printersUncheckedUpdateWithoutPrinter_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => printersUpdateWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUncheckedUpdateWithoutPrinter_statusesInputObjectSchema)])
}).strict();
export const printersUpdateWithWhereUniqueWithoutPrinter_statusesInputObjectSchema: z.ZodType<Prisma.printersUpdateWithWhereUniqueWithoutPrinter_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateWithWhereUniqueWithoutPrinter_statusesInput>;
export const printersUpdateWithWhereUniqueWithoutPrinter_statusesInputObjectZodSchema = makeSchema();
