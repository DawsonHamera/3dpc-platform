import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { point_logCreateWithoutUserInputObjectSchema as point_logCreateWithoutUserInputObjectSchema } from './point_logCreateWithoutUserInput.schema';
import { point_logUncheckedCreateWithoutUserInputObjectSchema as point_logUncheckedCreateWithoutUserInputObjectSchema } from './point_logUncheckedCreateWithoutUserInput.schema';
import { point_logCreateOrConnectWithoutUserInputObjectSchema as point_logCreateOrConnectWithoutUserInputObjectSchema } from './point_logCreateOrConnectWithoutUserInput.schema';
import { point_logUpsertWithWhereUniqueWithoutUserInputObjectSchema as point_logUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './point_logUpsertWithWhereUniqueWithoutUserInput.schema';
import { point_logCreateManyUserInputEnvelopeObjectSchema as point_logCreateManyUserInputEnvelopeObjectSchema } from './point_logCreateManyUserInputEnvelope.schema';
import { point_logWhereUniqueInputObjectSchema as point_logWhereUniqueInputObjectSchema } from './point_logWhereUniqueInput.schema';
import { point_logUpdateWithWhereUniqueWithoutUserInputObjectSchema as point_logUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './point_logUpdateWithWhereUniqueWithoutUserInput.schema';
import { point_logUpdateManyWithWhereWithoutUserInputObjectSchema as point_logUpdateManyWithWhereWithoutUserInputObjectSchema } from './point_logUpdateManyWithWhereWithoutUserInput.schema';
import { point_logScalarWhereInputObjectSchema as point_logScalarWhereInputObjectSchema } from './point_logScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => point_logCreateWithoutUserInputObjectSchema), z.lazy(() => point_logCreateWithoutUserInputObjectSchema).array(), z.lazy(() => point_logUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => point_logUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => point_logCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => point_logCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => point_logUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => point_logUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => point_logCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => point_logWhereUniqueInputObjectSchema), z.lazy(() => point_logWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => point_logWhereUniqueInputObjectSchema), z.lazy(() => point_logWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => point_logWhereUniqueInputObjectSchema), z.lazy(() => point_logWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => point_logWhereUniqueInputObjectSchema), z.lazy(() => point_logWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => point_logUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => point_logUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => point_logUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => point_logUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => point_logScalarWhereInputObjectSchema), z.lazy(() => point_logScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const point_logUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.point_logUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.point_logUpdateManyWithoutUserNestedInput>;
export const point_logUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
