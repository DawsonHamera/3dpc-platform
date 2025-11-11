import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutPrinter_statusesInputObjectSchema as printersCreateWithoutPrinter_statusesInputObjectSchema } from './printersCreateWithoutPrinter_statusesInput.schema';
import { printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema as printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema } from './printersUncheckedCreateWithoutPrinter_statusesInput.schema';
import { printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema as printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema } from './printersCreateOrConnectWithoutPrinter_statusesInput.schema';
import { printersUpsertWithWhereUniqueWithoutPrinter_statusesInputObjectSchema as printersUpsertWithWhereUniqueWithoutPrinter_statusesInputObjectSchema } from './printersUpsertWithWhereUniqueWithoutPrinter_statusesInput.schema';
import { printersCreateManyPrinter_statusesInputEnvelopeObjectSchema as printersCreateManyPrinter_statusesInputEnvelopeObjectSchema } from './printersCreateManyPrinter_statusesInputEnvelope.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithWhereUniqueWithoutPrinter_statusesInputObjectSchema as printersUpdateWithWhereUniqueWithoutPrinter_statusesInputObjectSchema } from './printersUpdateWithWhereUniqueWithoutPrinter_statusesInput.schema';
import { printersUpdateManyWithWhereWithoutPrinter_statusesInputObjectSchema as printersUpdateManyWithWhereWithoutPrinter_statusesInputObjectSchema } from './printersUpdateManyWithWhereWithoutPrinter_statusesInput.schema';
import { printersScalarWhereInputObjectSchema as printersScalarWhereInputObjectSchema } from './printersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersCreateWithoutPrinter_statusesInputObjectSchema).array(), z.lazy(() => printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutPrinter_statusesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersCreateOrConnectWithoutPrinter_statusesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => printersUpsertWithWhereUniqueWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUpsertWithWhereUniqueWithoutPrinter_statusesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => printersCreateManyPrinter_statusesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => printersUpdateWithWhereUniqueWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUpdateWithWhereUniqueWithoutPrinter_statusesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => printersUpdateManyWithWhereWithoutPrinter_statusesInputObjectSchema), z.lazy(() => printersUpdateManyWithWhereWithoutPrinter_statusesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => printersScalarWhereInputObjectSchema), z.lazy(() => printersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const printersUncheckedUpdateManyWithoutPrinter_statusesNestedInputObjectSchema: z.ZodType<Prisma.printersUncheckedUpdateManyWithoutPrinter_statusesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUncheckedUpdateManyWithoutPrinter_statusesNestedInput>;
export const printersUncheckedUpdateManyWithoutPrinter_statusesNestedInputObjectZodSchema = makeSchema();
