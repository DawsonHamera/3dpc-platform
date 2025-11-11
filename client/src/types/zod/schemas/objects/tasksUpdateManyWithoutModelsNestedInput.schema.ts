import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutModelsInputObjectSchema as tasksCreateWithoutModelsInputObjectSchema } from './tasksCreateWithoutModelsInput.schema';
import { tasksUncheckedCreateWithoutModelsInputObjectSchema as tasksUncheckedCreateWithoutModelsInputObjectSchema } from './tasksUncheckedCreateWithoutModelsInput.schema';
import { tasksCreateOrConnectWithoutModelsInputObjectSchema as tasksCreateOrConnectWithoutModelsInputObjectSchema } from './tasksCreateOrConnectWithoutModelsInput.schema';
import { tasksUpsertWithWhereUniqueWithoutModelsInputObjectSchema as tasksUpsertWithWhereUniqueWithoutModelsInputObjectSchema } from './tasksUpsertWithWhereUniqueWithoutModelsInput.schema';
import { tasksCreateManyModelsInputEnvelopeObjectSchema as tasksCreateManyModelsInputEnvelopeObjectSchema } from './tasksCreateManyModelsInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithWhereUniqueWithoutModelsInputObjectSchema as tasksUpdateWithWhereUniqueWithoutModelsInputObjectSchema } from './tasksUpdateWithWhereUniqueWithoutModelsInput.schema';
import { tasksUpdateManyWithWhereWithoutModelsInputObjectSchema as tasksUpdateManyWithWhereWithoutModelsInputObjectSchema } from './tasksUpdateManyWithWhereWithoutModelsInput.schema';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutModelsInputObjectSchema), z.lazy(() => tasksCreateWithoutModelsInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutModelsInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutModelsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutModelsInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutModelsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tasksUpsertWithWhereUniqueWithoutModelsInputObjectSchema), z.lazy(() => tasksUpsertWithWhereUniqueWithoutModelsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyModelsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tasksUpdateWithWhereUniqueWithoutModelsInputObjectSchema), z.lazy(() => tasksUpdateWithWhereUniqueWithoutModelsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tasksUpdateManyWithWhereWithoutModelsInputObjectSchema), z.lazy(() => tasksUpdateManyWithWhereWithoutModelsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tasksScalarWhereInputObjectSchema), z.lazy(() => tasksScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tasksUpdateManyWithoutModelsNestedInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithoutModelsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithoutModelsNestedInput>;
export const tasksUpdateManyWithoutModelsNestedInputObjectZodSchema = makeSchema();
