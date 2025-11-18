import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { recycling_logCreateWithoutCreated_byInputObjectSchema as recycling_logCreateWithoutCreated_byInputObjectSchema } from './recycling_logCreateWithoutCreated_byInput.schema';
import { recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema as recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema } from './recycling_logUncheckedCreateWithoutCreated_byInput.schema';
import { recycling_logCreateOrConnectWithoutCreated_byInputObjectSchema as recycling_logCreateOrConnectWithoutCreated_byInputObjectSchema } from './recycling_logCreateOrConnectWithoutCreated_byInput.schema';
import { recycling_logUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema as recycling_logUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema } from './recycling_logUpsertWithWhereUniqueWithoutCreated_byInput.schema';
import { recycling_logCreateManyCreated_byInputEnvelopeObjectSchema as recycling_logCreateManyCreated_byInputEnvelopeObjectSchema } from './recycling_logCreateManyCreated_byInputEnvelope.schema';
import { recycling_logWhereUniqueInputObjectSchema as recycling_logWhereUniqueInputObjectSchema } from './recycling_logWhereUniqueInput.schema';
import { recycling_logUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema as recycling_logUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema } from './recycling_logUpdateWithWhereUniqueWithoutCreated_byInput.schema';
import { recycling_logUpdateManyWithWhereWithoutCreated_byInputObjectSchema as recycling_logUpdateManyWithWhereWithoutCreated_byInputObjectSchema } from './recycling_logUpdateManyWithWhereWithoutCreated_byInput.schema';
import { recycling_logScalarWhereInputObjectSchema as recycling_logScalarWhereInputObjectSchema } from './recycling_logScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => recycling_logCreateWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logCreateWithoutCreated_byInputObjectSchema).array(), z.lazy(() => recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logUncheckedCreateWithoutCreated_byInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => recycling_logCreateOrConnectWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logCreateOrConnectWithoutCreated_byInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => recycling_logUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logUpsertWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => recycling_logCreateManyCreated_byInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => recycling_logWhereUniqueInputObjectSchema), z.lazy(() => recycling_logWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => recycling_logWhereUniqueInputObjectSchema), z.lazy(() => recycling_logWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => recycling_logWhereUniqueInputObjectSchema), z.lazy(() => recycling_logWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => recycling_logWhereUniqueInputObjectSchema), z.lazy(() => recycling_logWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => recycling_logUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logUpdateWithWhereUniqueWithoutCreated_byInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => recycling_logUpdateManyWithWhereWithoutCreated_byInputObjectSchema), z.lazy(() => recycling_logUpdateManyWithWhereWithoutCreated_byInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => recycling_logScalarWhereInputObjectSchema), z.lazy(() => recycling_logScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const recycling_logUpdateManyWithoutCreated_byNestedInputObjectSchema: z.ZodType<Prisma.recycling_logUpdateManyWithoutCreated_byNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.recycling_logUpdateManyWithoutCreated_byNestedInput>;
export const recycling_logUpdateManyWithoutCreated_byNestedInputObjectZodSchema = makeSchema();
