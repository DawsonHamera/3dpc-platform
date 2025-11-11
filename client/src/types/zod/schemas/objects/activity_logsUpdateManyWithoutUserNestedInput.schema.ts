import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logsCreateWithoutUserInputObjectSchema as activity_logsCreateWithoutUserInputObjectSchema } from './activity_logsCreateWithoutUserInput.schema';
import { activity_logsUncheckedCreateWithoutUserInputObjectSchema as activity_logsUncheckedCreateWithoutUserInputObjectSchema } from './activity_logsUncheckedCreateWithoutUserInput.schema';
import { activity_logsCreateOrConnectWithoutUserInputObjectSchema as activity_logsCreateOrConnectWithoutUserInputObjectSchema } from './activity_logsCreateOrConnectWithoutUserInput.schema';
import { activity_logsUpsertWithWhereUniqueWithoutUserInputObjectSchema as activity_logsUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './activity_logsUpsertWithWhereUniqueWithoutUserInput.schema';
import { activity_logsCreateManyUserInputEnvelopeObjectSchema as activity_logsCreateManyUserInputEnvelopeObjectSchema } from './activity_logsCreateManyUserInputEnvelope.schema';
import { activity_logsWhereUniqueInputObjectSchema as activity_logsWhereUniqueInputObjectSchema } from './activity_logsWhereUniqueInput.schema';
import { activity_logsUpdateWithWhereUniqueWithoutUserInputObjectSchema as activity_logsUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './activity_logsUpdateWithWhereUniqueWithoutUserInput.schema';
import { activity_logsUpdateManyWithWhereWithoutUserInputObjectSchema as activity_logsUpdateManyWithWhereWithoutUserInputObjectSchema } from './activity_logsUpdateManyWithWhereWithoutUserInput.schema';
import { activity_logsScalarWhereInputObjectSchema as activity_logsScalarWhereInputObjectSchema } from './activity_logsScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => activity_logsCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logsCreateWithoutUserInputObjectSchema).array(), z.lazy(() => activity_logsUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logsUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => activity_logsCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => activity_logsCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => activity_logsUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => activity_logsUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => activity_logsCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => activity_logsWhereUniqueInputObjectSchema), z.lazy(() => activity_logsWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => activity_logsWhereUniqueInputObjectSchema), z.lazy(() => activity_logsWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => activity_logsWhereUniqueInputObjectSchema), z.lazy(() => activity_logsWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => activity_logsWhereUniqueInputObjectSchema), z.lazy(() => activity_logsWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => activity_logsUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => activity_logsUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => activity_logsUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => activity_logsUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => activity_logsScalarWhereInputObjectSchema), z.lazy(() => activity_logsScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const activity_logsUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.activity_logsUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logsUpdateManyWithoutUserNestedInput>;
export const activity_logsUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
