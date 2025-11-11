import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutFilesInputObjectSchema as printersCreateWithoutFilesInputObjectSchema } from './printersCreateWithoutFilesInput.schema';
import { printersUncheckedCreateWithoutFilesInputObjectSchema as printersUncheckedCreateWithoutFilesInputObjectSchema } from './printersUncheckedCreateWithoutFilesInput.schema';
import { printersCreateOrConnectWithoutFilesInputObjectSchema as printersCreateOrConnectWithoutFilesInputObjectSchema } from './printersCreateOrConnectWithoutFilesInput.schema';
import { printersUpsertWithWhereUniqueWithoutFilesInputObjectSchema as printersUpsertWithWhereUniqueWithoutFilesInputObjectSchema } from './printersUpsertWithWhereUniqueWithoutFilesInput.schema';
import { printersCreateManyFilesInputEnvelopeObjectSchema as printersCreateManyFilesInputEnvelopeObjectSchema } from './printersCreateManyFilesInputEnvelope.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithWhereUniqueWithoutFilesInputObjectSchema as printersUpdateWithWhereUniqueWithoutFilesInputObjectSchema } from './printersUpdateWithWhereUniqueWithoutFilesInput.schema';
import { printersUpdateManyWithWhereWithoutFilesInputObjectSchema as printersUpdateManyWithWhereWithoutFilesInputObjectSchema } from './printersUpdateManyWithWhereWithoutFilesInput.schema';
import { printersScalarWhereInputObjectSchema as printersScalarWhereInputObjectSchema } from './printersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutFilesInputObjectSchema), z.lazy(() => printersCreateWithoutFilesInputObjectSchema).array(), z.lazy(() => printersUncheckedCreateWithoutFilesInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutFilesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => printersCreateOrConnectWithoutFilesInputObjectSchema), z.lazy(() => printersCreateOrConnectWithoutFilesInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => printersUpsertWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => printersUpsertWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => printersCreateManyFilesInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => printersUpdateWithWhereUniqueWithoutFilesInputObjectSchema), z.lazy(() => printersUpdateWithWhereUniqueWithoutFilesInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => printersUpdateManyWithWhereWithoutFilesInputObjectSchema), z.lazy(() => printersUpdateManyWithWhereWithoutFilesInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => printersScalarWhereInputObjectSchema), z.lazy(() => printersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const printersUpdateManyWithoutFilesNestedInputObjectSchema: z.ZodType<Prisma.printersUpdateManyWithoutFilesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUpdateManyWithoutFilesNestedInput>;
export const printersUpdateManyWithoutFilesNestedInputObjectZodSchema = makeSchema();
