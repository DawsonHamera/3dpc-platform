import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { usersCreateWithoutGradeInputObjectSchema as usersCreateWithoutGradeInputObjectSchema } from './usersCreateWithoutGradeInput.schema';
import { usersUncheckedCreateWithoutGradeInputObjectSchema as usersUncheckedCreateWithoutGradeInputObjectSchema } from './usersUncheckedCreateWithoutGradeInput.schema';
import { usersCreateOrConnectWithoutGradeInputObjectSchema as usersCreateOrConnectWithoutGradeInputObjectSchema } from './usersCreateOrConnectWithoutGradeInput.schema';
import { usersUpsertWithWhereUniqueWithoutGradeInputObjectSchema as usersUpsertWithWhereUniqueWithoutGradeInputObjectSchema } from './usersUpsertWithWhereUniqueWithoutGradeInput.schema';
import { usersCreateManyGradeInputEnvelopeObjectSchema as usersCreateManyGradeInputEnvelopeObjectSchema } from './usersCreateManyGradeInputEnvelope.schema';
import { usersWhereUniqueInputObjectSchema as usersWhereUniqueInputObjectSchema } from './usersWhereUniqueInput.schema';
import { usersUpdateWithWhereUniqueWithoutGradeInputObjectSchema as usersUpdateWithWhereUniqueWithoutGradeInputObjectSchema } from './usersUpdateWithWhereUniqueWithoutGradeInput.schema';
import { usersUpdateManyWithWhereWithoutGradeInputObjectSchema as usersUpdateManyWithWhereWithoutGradeInputObjectSchema } from './usersUpdateManyWithWhereWithoutGradeInput.schema';
import { usersScalarWhereInputObjectSchema as usersScalarWhereInputObjectSchema } from './usersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => usersCreateWithoutGradeInputObjectSchema), z.lazy(() => usersCreateWithoutGradeInputObjectSchema).array(), z.lazy(() => usersUncheckedCreateWithoutGradeInputObjectSchema), z.lazy(() => usersUncheckedCreateWithoutGradeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => usersCreateOrConnectWithoutGradeInputObjectSchema), z.lazy(() => usersCreateOrConnectWithoutGradeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => usersUpsertWithWhereUniqueWithoutGradeInputObjectSchema), z.lazy(() => usersUpsertWithWhereUniqueWithoutGradeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => usersCreateManyGradeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => usersWhereUniqueInputObjectSchema), z.lazy(() => usersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => usersUpdateWithWhereUniqueWithoutGradeInputObjectSchema), z.lazy(() => usersUpdateWithWhereUniqueWithoutGradeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => usersUpdateManyWithWhereWithoutGradeInputObjectSchema), z.lazy(() => usersUpdateManyWithWhereWithoutGradeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => usersScalarWhereInputObjectSchema), z.lazy(() => usersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const usersUpdateManyWithoutGradeNestedInputObjectSchema: z.ZodType<Prisma.usersUpdateManyWithoutGradeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.usersUpdateManyWithoutGradeNestedInput>;
export const usersUpdateManyWithoutGradeNestedInputObjectZodSchema = makeSchema();
