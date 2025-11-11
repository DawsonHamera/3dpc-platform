import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { error_reportsCreateWithoutTasksInputObjectSchema as error_reportsCreateWithoutTasksInputObjectSchema } from './error_reportsCreateWithoutTasksInput.schema';
import { error_reportsUncheckedCreateWithoutTasksInputObjectSchema as error_reportsUncheckedCreateWithoutTasksInputObjectSchema } from './error_reportsUncheckedCreateWithoutTasksInput.schema';
import { error_reportsCreateOrConnectWithoutTasksInputObjectSchema as error_reportsCreateOrConnectWithoutTasksInputObjectSchema } from './error_reportsCreateOrConnectWithoutTasksInput.schema';
import { error_reportsUpsertWithWhereUniqueWithoutTasksInputObjectSchema as error_reportsUpsertWithWhereUniqueWithoutTasksInputObjectSchema } from './error_reportsUpsertWithWhereUniqueWithoutTasksInput.schema';
import { error_reportsCreateManyTasksInputEnvelopeObjectSchema as error_reportsCreateManyTasksInputEnvelopeObjectSchema } from './error_reportsCreateManyTasksInputEnvelope.schema';
import { error_reportsWhereUniqueInputObjectSchema as error_reportsWhereUniqueInputObjectSchema } from './error_reportsWhereUniqueInput.schema';
import { error_reportsUpdateWithWhereUniqueWithoutTasksInputObjectSchema as error_reportsUpdateWithWhereUniqueWithoutTasksInputObjectSchema } from './error_reportsUpdateWithWhereUniqueWithoutTasksInput.schema';
import { error_reportsUpdateManyWithWhereWithoutTasksInputObjectSchema as error_reportsUpdateManyWithWhereWithoutTasksInputObjectSchema } from './error_reportsUpdateManyWithWhereWithoutTasksInput.schema';
import { error_reportsScalarWhereInputObjectSchema as error_reportsScalarWhereInputObjectSchema } from './error_reportsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => error_reportsCreateWithoutTasksInputObjectSchema), z.lazy(() => error_reportsCreateWithoutTasksInputObjectSchema).array(), z.lazy(() => error_reportsUncheckedCreateWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUncheckedCreateWithoutTasksInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => error_reportsCreateOrConnectWithoutTasksInputObjectSchema), z.lazy(() => error_reportsCreateOrConnectWithoutTasksInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => error_reportsUpsertWithWhereUniqueWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUpsertWithWhereUniqueWithoutTasksInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => error_reportsCreateManyTasksInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => error_reportsWhereUniqueInputObjectSchema), z.lazy(() => error_reportsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => error_reportsUpdateWithWhereUniqueWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUpdateWithWhereUniqueWithoutTasksInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => error_reportsUpdateManyWithWhereWithoutTasksInputObjectSchema), z.lazy(() => error_reportsUpdateManyWithWhereWithoutTasksInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => error_reportsScalarWhereInputObjectSchema), z.lazy(() => error_reportsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const error_reportsUncheckedUpdateManyWithoutTasksNestedInputObjectSchema: z.ZodType<Prisma.error_reportsUncheckedUpdateManyWithoutTasksNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.error_reportsUncheckedUpdateManyWithoutTasksNestedInput>;
export const error_reportsUncheckedUpdateManyWithoutTasksNestedInputObjectZodSchema = makeSchema();
