import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { printersCreateWithoutMaterialsInputObjectSchema as printersCreateWithoutMaterialsInputObjectSchema } from './printersCreateWithoutMaterialsInput.schema';
import { printersUncheckedCreateWithoutMaterialsInputObjectSchema as printersUncheckedCreateWithoutMaterialsInputObjectSchema } from './printersUncheckedCreateWithoutMaterialsInput.schema';
import { printersCreateOrConnectWithoutMaterialsInputObjectSchema as printersCreateOrConnectWithoutMaterialsInputObjectSchema } from './printersCreateOrConnectWithoutMaterialsInput.schema';
import { printersUpsertWithWhereUniqueWithoutMaterialsInputObjectSchema as printersUpsertWithWhereUniqueWithoutMaterialsInputObjectSchema } from './printersUpsertWithWhereUniqueWithoutMaterialsInput.schema';
import { printersCreateManyMaterialsInputEnvelopeObjectSchema as printersCreateManyMaterialsInputEnvelopeObjectSchema } from './printersCreateManyMaterialsInputEnvelope.schema';
import { printersWhereUniqueInputObjectSchema as printersWhereUniqueInputObjectSchema } from './printersWhereUniqueInput.schema';
import { printersUpdateWithWhereUniqueWithoutMaterialsInputObjectSchema as printersUpdateWithWhereUniqueWithoutMaterialsInputObjectSchema } from './printersUpdateWithWhereUniqueWithoutMaterialsInput.schema';
import { printersUpdateManyWithWhereWithoutMaterialsInputObjectSchema as printersUpdateManyWithWhereWithoutMaterialsInputObjectSchema } from './printersUpdateManyWithWhereWithoutMaterialsInput.schema';
import { printersScalarWhereInputObjectSchema as printersScalarWhereInputObjectSchema } from './printersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => printersCreateWithoutMaterialsInputObjectSchema), z.lazy(() => printersCreateWithoutMaterialsInputObjectSchema).array(), z.lazy(() => printersUncheckedCreateWithoutMaterialsInputObjectSchema), z.lazy(() => printersUncheckedCreateWithoutMaterialsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => printersCreateOrConnectWithoutMaterialsInputObjectSchema), z.lazy(() => printersCreateOrConnectWithoutMaterialsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => printersUpsertWithWhereUniqueWithoutMaterialsInputObjectSchema), z.lazy(() => printersUpsertWithWhereUniqueWithoutMaterialsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => printersCreateManyMaterialsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => printersWhereUniqueInputObjectSchema), z.lazy(() => printersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => printersUpdateWithWhereUniqueWithoutMaterialsInputObjectSchema), z.lazy(() => printersUpdateWithWhereUniqueWithoutMaterialsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => printersUpdateManyWithWhereWithoutMaterialsInputObjectSchema), z.lazy(() => printersUpdateManyWithWhereWithoutMaterialsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => printersScalarWhereInputObjectSchema), z.lazy(() => printersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const printersUncheckedUpdateManyWithoutMaterialsNestedInputObjectSchema: z.ZodType<Prisma.printersUncheckedUpdateManyWithoutMaterialsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.printersUncheckedUpdateManyWithoutMaterialsNestedInput>;
export const printersUncheckedUpdateManyWithoutMaterialsNestedInputObjectZodSchema = makeSchema();
