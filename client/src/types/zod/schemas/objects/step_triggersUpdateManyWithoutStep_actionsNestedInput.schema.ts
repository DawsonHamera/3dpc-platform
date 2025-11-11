import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggersCreateWithoutStep_actionsInputObjectSchema as step_triggersCreateWithoutStep_actionsInputObjectSchema } from './step_triggersCreateWithoutStep_actionsInput.schema';
import { step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema as step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema } from './step_triggersUncheckedCreateWithoutStep_actionsInput.schema';
import { step_triggersCreateOrConnectWithoutStep_actionsInputObjectSchema as step_triggersCreateOrConnectWithoutStep_actionsInputObjectSchema } from './step_triggersCreateOrConnectWithoutStep_actionsInput.schema';
import { step_triggersUpsertWithWhereUniqueWithoutStep_actionsInputObjectSchema as step_triggersUpsertWithWhereUniqueWithoutStep_actionsInputObjectSchema } from './step_triggersUpsertWithWhereUniqueWithoutStep_actionsInput.schema';
import { step_triggersCreateManyStep_actionsInputEnvelopeObjectSchema as step_triggersCreateManyStep_actionsInputEnvelopeObjectSchema } from './step_triggersCreateManyStep_actionsInputEnvelope.schema';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './step_triggersWhereUniqueInput.schema';
import { step_triggersUpdateWithWhereUniqueWithoutStep_actionsInputObjectSchema as step_triggersUpdateWithWhereUniqueWithoutStep_actionsInputObjectSchema } from './step_triggersUpdateWithWhereUniqueWithoutStep_actionsInput.schema';
import { step_triggersUpdateManyWithWhereWithoutStep_actionsInputObjectSchema as step_triggersUpdateManyWithWhereWithoutStep_actionsInputObjectSchema } from './step_triggersUpdateManyWithWhereWithoutStep_actionsInput.schema';
import { step_triggersScalarWhereInputObjectSchema as step_triggersScalarWhereInputObjectSchema } from './step_triggersScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => step_triggersCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersCreateWithoutStep_actionsInputObjectSchema).array(), z.lazy(() => step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => step_triggersCreateOrConnectWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersCreateOrConnectWithoutStep_actionsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => step_triggersUpsertWithWhereUniqueWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersUpsertWithWhereUniqueWithoutStep_actionsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => step_triggersCreateManyStep_actionsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => step_triggersWhereUniqueInputObjectSchema), z.lazy(() => step_triggersWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => step_triggersWhereUniqueInputObjectSchema), z.lazy(() => step_triggersWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => step_triggersWhereUniqueInputObjectSchema), z.lazy(() => step_triggersWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => step_triggersWhereUniqueInputObjectSchema), z.lazy(() => step_triggersWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => step_triggersUpdateWithWhereUniqueWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersUpdateWithWhereUniqueWithoutStep_actionsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => step_triggersUpdateManyWithWhereWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersUpdateManyWithWhereWithoutStep_actionsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => step_triggersScalarWhereInputObjectSchema), z.lazy(() => step_triggersScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const step_triggersUpdateManyWithoutStep_actionsNestedInputObjectSchema: z.ZodType<Prisma.step_triggersUpdateManyWithoutStep_actionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersUpdateManyWithoutStep_actionsNestedInput>;
export const step_triggersUpdateManyWithoutStep_actionsNestedInputObjectZodSchema = makeSchema();
