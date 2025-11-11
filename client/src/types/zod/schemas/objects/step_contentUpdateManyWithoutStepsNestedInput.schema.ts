import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentCreateWithoutStepsInputObjectSchema as step_contentCreateWithoutStepsInputObjectSchema } from './step_contentCreateWithoutStepsInput.schema';
import { step_contentUncheckedCreateWithoutStepsInputObjectSchema as step_contentUncheckedCreateWithoutStepsInputObjectSchema } from './step_contentUncheckedCreateWithoutStepsInput.schema';
import { step_contentCreateOrConnectWithoutStepsInputObjectSchema as step_contentCreateOrConnectWithoutStepsInputObjectSchema } from './step_contentCreateOrConnectWithoutStepsInput.schema';
import { step_contentUpsertWithWhereUniqueWithoutStepsInputObjectSchema as step_contentUpsertWithWhereUniqueWithoutStepsInputObjectSchema } from './step_contentUpsertWithWhereUniqueWithoutStepsInput.schema';
import { step_contentCreateManyStepsInputEnvelopeObjectSchema as step_contentCreateManyStepsInputEnvelopeObjectSchema } from './step_contentCreateManyStepsInputEnvelope.schema';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './step_contentWhereUniqueInput.schema';
import { step_contentUpdateWithWhereUniqueWithoutStepsInputObjectSchema as step_contentUpdateWithWhereUniqueWithoutStepsInputObjectSchema } from './step_contentUpdateWithWhereUniqueWithoutStepsInput.schema';
import { step_contentUpdateManyWithWhereWithoutStepsInputObjectSchema as step_contentUpdateManyWithWhereWithoutStepsInputObjectSchema } from './step_contentUpdateManyWithWhereWithoutStepsInput.schema';
import { step_contentScalarWhereInputObjectSchema as step_contentScalarWhereInputObjectSchema } from './step_contentScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => step_contentCreateWithoutStepsInputObjectSchema), z.lazy(() => step_contentCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => step_contentUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => step_contentUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => step_contentCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => step_contentCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => step_contentUpsertWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => step_contentUpsertWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => step_contentCreateManyStepsInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => step_contentWhereUniqueInputObjectSchema), z.lazy(() => step_contentWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => step_contentWhereUniqueInputObjectSchema), z.lazy(() => step_contentWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => step_contentWhereUniqueInputObjectSchema), z.lazy(() => step_contentWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => step_contentWhereUniqueInputObjectSchema), z.lazy(() => step_contentWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => step_contentUpdateWithWhereUniqueWithoutStepsInputObjectSchema), z.lazy(() => step_contentUpdateWithWhereUniqueWithoutStepsInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => step_contentUpdateManyWithWhereWithoutStepsInputObjectSchema), z.lazy(() => step_contentUpdateManyWithWhereWithoutStepsInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => step_contentScalarWhereInputObjectSchema), z.lazy(() => step_contentScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const step_contentUpdateManyWithoutStepsNestedInputObjectSchema: z.ZodType<Prisma.step_contentUpdateManyWithoutStepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentUpdateManyWithoutStepsNestedInput>;
export const step_contentUpdateManyWithoutStepsNestedInputObjectZodSchema = makeSchema();
