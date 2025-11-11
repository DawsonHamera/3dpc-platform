import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tasksCreateWithoutPrintersInputObjectSchema as tasksCreateWithoutPrintersInputObjectSchema } from './tasksCreateWithoutPrintersInput.schema';
import { tasksUncheckedCreateWithoutPrintersInputObjectSchema as tasksUncheckedCreateWithoutPrintersInputObjectSchema } from './tasksUncheckedCreateWithoutPrintersInput.schema';
import { tasksCreateOrConnectWithoutPrintersInputObjectSchema as tasksCreateOrConnectWithoutPrintersInputObjectSchema } from './tasksCreateOrConnectWithoutPrintersInput.schema';
import { tasksUpsertWithWhereUniqueWithoutPrintersInputObjectSchema as tasksUpsertWithWhereUniqueWithoutPrintersInputObjectSchema } from './tasksUpsertWithWhereUniqueWithoutPrintersInput.schema';
import { tasksCreateManyPrintersInputEnvelopeObjectSchema as tasksCreateManyPrintersInputEnvelopeObjectSchema } from './tasksCreateManyPrintersInputEnvelope.schema';
import { tasksWhereUniqueInputObjectSchema as tasksWhereUniqueInputObjectSchema } from './tasksWhereUniqueInput.schema';
import { tasksUpdateWithWhereUniqueWithoutPrintersInputObjectSchema as tasksUpdateWithWhereUniqueWithoutPrintersInputObjectSchema } from './tasksUpdateWithWhereUniqueWithoutPrintersInput.schema';
import { tasksUpdateManyWithWhereWithoutPrintersInputObjectSchema as tasksUpdateManyWithWhereWithoutPrintersInputObjectSchema } from './tasksUpdateManyWithWhereWithoutPrintersInput.schema';
import { tasksScalarWhereInputObjectSchema as tasksScalarWhereInputObjectSchema } from './tasksScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tasksCreateWithoutPrintersInputObjectSchema), z.lazy(() => tasksCreateWithoutPrintersInputObjectSchema).array(), z.lazy(() => tasksUncheckedCreateWithoutPrintersInputObjectSchema), z.lazy(() => tasksUncheckedCreateWithoutPrintersInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tasksCreateOrConnectWithoutPrintersInputObjectSchema), z.lazy(() => tasksCreateOrConnectWithoutPrintersInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => tasksUpsertWithWhereUniqueWithoutPrintersInputObjectSchema), z.lazy(() => tasksUpsertWithWhereUniqueWithoutPrintersInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tasksCreateManyPrintersInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => tasksWhereUniqueInputObjectSchema), z.lazy(() => tasksWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => tasksUpdateWithWhereUniqueWithoutPrintersInputObjectSchema), z.lazy(() => tasksUpdateWithWhereUniqueWithoutPrintersInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => tasksUpdateManyWithWhereWithoutPrintersInputObjectSchema), z.lazy(() => tasksUpdateManyWithWhereWithoutPrintersInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => tasksScalarWhereInputObjectSchema), z.lazy(() => tasksScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const tasksUpdateManyWithoutPrintersNestedInputObjectSchema: z.ZodType<Prisma.tasksUpdateManyWithoutPrintersNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tasksUpdateManyWithoutPrintersNestedInput>;
export const tasksUpdateManyWithoutPrintersNestedInputObjectZodSchema = makeSchema();
