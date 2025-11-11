import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateWithoutStepsInputObjectSchema as error_reportsCreateWithoutStepsInputObjectSchema } from './error_reportsCreateWithoutStepsInput.schema';
import { error_reportsUncheckedCreateWithoutStepsInputObjectSchema as error_reportsUncheckedCreateWithoutStepsInputObjectSchema } from './error_reportsUncheckedCreateWithoutStepsInput.schema';
import { error_reportsCreateOrConnectWithoutStepsInputObjectSchema as error_reportsCreateOrConnectWithoutStepsInputObjectSchema } from './error_reportsCreateOrConnectWithoutStepsInput.schema';
import { error_reportsUpsertWithWhereUniqueWithoutStepsInputObjectSchema as error_reportsUpsertWithWhereUniqueWithoutStepsInputObjectSchema } from './error_reportsUpsertWithWhereUniqueWithoutStepsInput.schema';
import { error_reportsCreateManyStepsInputEnvelopeObjectSchema as error_reportsCreateManyStepsInputEnvelopeObjectSchema } from './error_reportsCreateManyStepsInputEnvelope.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsUpdateWithWhereUniqueWithoutStepsInputObjectSchema as error_reportsUpdateWithWhereUniqueWithoutStepsInputObjectSchema } from './error_reportsUpdateWithWhereUniqueWithoutStepsInput.schema';
import { error_reportsUpdateManyWithWhereWithoutStepsInputObjectSchema as error_reportsUpdateManyWithWhereWithoutStepsInputObjectSchema } from './error_reportsUpdateManyWithWhereWithoutStepsInput.schema';
import { error_reportsScalarWhereInputObjectSchema as error_reportsScalarWhereInputObjectSchema } from './error_reportsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => error_reportsCreateWithoutStepsInputObjectSchema), z.lazy(() => error_reportsCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => error_reportsUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => error_reportsCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => error_reportsCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => error_reportsUpsertWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUpsertWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => error_reportsCreateManyStepsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => error_reportsUpdateWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUpdateWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => error_reportsUpdateManyWithWhereWithoutStepsInputObjectSchema), z.lazy(() => error_reportsUpdateManyWithWhereWithoutStepsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => error_reportsScalarWhereInputObjectSchema), z.lazy(() => error_reportsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const error_reportsUpdateManyWithoutStepsNestedInputObjectSchema: z.ZodType<Prisma.error_reportsUpdateManyWithoutStepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUpdateManyWithoutStepsNestedInput>;
export const error_reportsUpdateManyWithoutStepsNestedInputObjectZodSchema = makeSchema();
