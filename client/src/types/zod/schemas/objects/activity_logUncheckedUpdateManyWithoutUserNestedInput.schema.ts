import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { activity_logCreateWithoutUserInputObjectSchema as activity_logCreateWithoutUserInputObjectSchema } from './activity_logCreateWithoutUserInput.schema';
import { activity_logUncheckedCreateWithoutUserInputObjectSchema as activity_logUncheckedCreateWithoutUserInputObjectSchema } from './activity_logUncheckedCreateWithoutUserInput.schema';
import { activity_logCreateOrConnectWithoutUserInputObjectSchema as activity_logCreateOrConnectWithoutUserInputObjectSchema } from './activity_logCreateOrConnectWithoutUserInput.schema';
import { activity_logUpsertWithWhereUniqueWithoutUserInputObjectSchema as activity_logUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './activity_logUpsertWithWhereUniqueWithoutUserInput.schema';
import { activity_logCreateManyUserInputEnvelopeObjectSchema as activity_logCreateManyUserInputEnvelopeObjectSchema } from './activity_logCreateManyUserInputEnvelope.schema';
import { activity_logWhereUniqueInputObjectSchema as activity_logWhereUniqueInputObjectSchema } from './activity_logWhereUniqueInput.schema';
import { activity_logUpdateWithWhereUniqueWithoutUserInputObjectSchema as activity_logUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './activity_logUpdateWithWhereUniqueWithoutUserInput.schema';
import { activity_logUpdateManyWithWhereWithoutUserInputObjectSchema as activity_logUpdateManyWithWhereWithoutUserInputObjectSchema } from './activity_logUpdateManyWithWhereWithoutUserInput.schema';
import { activity_logScalarWhereInputObjectSchema as activity_logScalarWhereInputObjectSchema } from './activity_logScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => activity_logCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logCreateWithoutUserInputObjectSchema).array(), z.lazy(() => activity_logUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => activity_logUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => activity_logCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => activity_logCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => activity_logUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => activity_logUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => activity_logCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => activity_logWhereUniqueInputObjectSchema), z.lazy(() => activity_logWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => activity_logWhereUniqueInputObjectSchema), z.lazy(() => activity_logWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => activity_logWhereUniqueInputObjectSchema), z.lazy(() => activity_logWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => activity_logWhereUniqueInputObjectSchema), z.lazy(() => activity_logWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => activity_logUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => activity_logUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => activity_logUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => activity_logUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => activity_logScalarWhereInputObjectSchema), z.lazy(() => activity_logScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const activity_logUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.activity_logUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.activity_logUncheckedUpdateManyWithoutUserNestedInput>;
export const activity_logUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
