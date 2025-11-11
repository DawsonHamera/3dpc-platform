import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { step_triggersCreateWithoutStep_actionsInputObjectSchema as step_triggersCreateWithoutStep_actionsInputObjectSchema } from './step_triggersCreateWithoutStep_actionsInput.schema';
import { step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema as step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema } from './step_triggersUncheckedCreateWithoutStep_actionsInput.schema';
import { step_triggersCreateOrConnectWithoutStep_actionsInputObjectSchema as step_triggersCreateOrConnectWithoutStep_actionsInputObjectSchema } from './step_triggersCreateOrConnectWithoutStep_actionsInput.schema';
import { step_triggersCreateManyStep_actionsInputEnvelopeObjectSchema as step_triggersCreateManyStep_actionsInputEnvelopeObjectSchema } from './step_triggersCreateManyStep_actionsInputEnvelope.schema';
import { step_triggersWhereUniqueInputObjectSchema as step_triggersWhereUniqueInputObjectSchema } from './step_triggersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => step_triggersCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersCreateWithoutStep_actionsInputObjectSchema).array(), z.lazy(() => step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersUncheckedCreateWithoutStep_actionsInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => step_triggersCreateOrConnectWithoutStep_actionsInputObjectSchema), z.lazy(() => step_triggersCreateOrConnectWithoutStep_actionsInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => step_triggersCreateManyStep_actionsInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => step_triggersWhereUniqueInputObjectSchema), z.lazy(() => step_triggersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const step_triggersUncheckedCreateNestedManyWithoutStep_actionsInputObjectSchema: z.ZodType<Prisma.step_triggersUncheckedCreateNestedManyWithoutStep_actionsInput> = makeSchema() as unknown as z.ZodType<Prisma.step_triggersUncheckedCreateNestedManyWithoutStep_actionsInput>;
export const step_triggersUncheckedCreateNestedManyWithoutStep_actionsInputObjectZodSchema = makeSchema();
