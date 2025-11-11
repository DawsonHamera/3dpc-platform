import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersCreateWithoutPrinter_statusesInputObjectSchema as printersCreateWithoutPrinter_statusesInputObjectSchema } from './printersCreateWithoutPrinter_statusesInput.schema';
import { printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema as printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema } from './printersUncheckedCreateWithoutPrinter_statusesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => printersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => printersCreateWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema)])
}).strict();
export const printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema: z.ZodType<Prisma.printersCreateOrConnectWithoutPrinter_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateOrConnectWithoutPrinter_statusesInput>;
export const printersCreateOrConnectWithoutPrinter_statusesInputObjectZodSchema = makeSchema();
