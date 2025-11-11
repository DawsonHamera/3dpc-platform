import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutPrinter_statusesInputObjectSchema as printersCreateWithoutPrinter_statusesInputObjectSchema } from './printersCreateWithoutPrinter_statusesInput.schema';
import { printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema as printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema } from './printersUncheckedCreateWithoutPrinter_statusesInput.schema';
import { printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema as printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema } from './printersCreateOrConnectWithoutPrinter_statusesInput.schema';
import { printersCreateManyPrinter_statusesInputEnvelopeObjectSchema as printersCreateManyPrinter_statusesInputEnvelopeObjectSchema } from './printersCreateManyPrinter_statusesInputEnvelope.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersCreateWithoutPrinter_statusesInputObjectSchema).array(), z.lazy(() => printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => printersCreateManyPrinter_statusesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const printersCreateNestedManyWithoutPrinter_statusesInputObjectSchema: z.ZodType<Prisma.printersCreateNestedManyWithoutPrinter_statusesInput> = makeSchema() as unknown as z.ZodType<Prisma.printersCreateNestedManyWithoutPrinter_statusesInput>;
export const printersCreateNestedManyWithoutPrinter_statusesInputObjectZodSchema = makeSchema();
