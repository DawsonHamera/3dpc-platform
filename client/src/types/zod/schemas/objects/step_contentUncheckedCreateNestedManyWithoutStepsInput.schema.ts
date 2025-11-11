import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_contentCreateWithoutStepsInputObjectSchema as step_contentCreateWithoutStepsInputObjectSchema } from './step_contentCreateWithoutStepsInput.schema';
import { step_contentUncheckedCreateWithoutStepsInputObjectSchema as step_contentUncheckedCreateWithoutStepsInputObjectSchema } from './step_contentUncheckedCreateWithoutStepsInput.schema';
import { step_contentCreateOrConnectWithoutStepsInputObjectSchema as step_contentCreateOrConnectWithoutStepsInputObjectSchema } from './step_contentCreateOrConnectWithoutStepsInput.schema';
import { step_contentCreateManyStepsInputEnvelopeObjectSchema as step_contentCreateManyStepsInputEnvelopeObjectSchema } from './step_contentCreateManyStepsInputEnvelope.schema';
import { step_contentWhereUniqueInputObjectSchema as step_contentWhereUniqueInputObjectSchema } from './step_contentWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => step_contentCreateWithoutStepsInputObjectSchema), z.lazy(() => step_contentCreateWithoutStepsInputObjectSchema).array(), z.lazy(() => step_contentUncheckedCreateWithoutStepsInputObjectSchema), z.lazy(() => step_contentUncheckedCreateWithoutStepsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => step_contentCreateOrConnectWithoutStepsInputObjectSchema), z.lazy(() => step_contentCreateOrConnectWithoutStepsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => step_contentCreateManyStepsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => step_contentWhereUniqueInputObjectSchema), z.lazy(() => step_contentWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const step_contentUncheckedCreateNestedManyWithoutStepsInputObjectSchema: z.ZodType<Prisma.step_contentUncheckedCreateNestedManyWithoutStepsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_contentUncheckedCreateNestedManyWithoutStepsInput>;
export const step_contentUncheckedCreateNestedManyWithoutStepsInputObjectZodSchema = makeSchema();
